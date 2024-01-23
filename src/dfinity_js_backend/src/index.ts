import {
  Canister,
  ic,
  Manual,
  None,
  Principal,
  query,
  Some,
  update,
  text,
  Ok
} from 'azle';
import {
  HttpResponse,
  HttpTransformArgs,
  managementCanister
} from 'azle/canisters/management';

interface KnowledgeGraphItem {
  [x: string]: any;
  title: string;
  subtitle?: string;
}

interface VisualMatchItem {
  [x: string]: any;
  title: string;
}

interface SerpApiResponse {
  knowledge_graph: KnowledgeGraphItem[];
  visual_matches: VisualMatchItem[];
}

interface TitleInfo {
  title: string;
  link?: string;
  thumbnail?: string;
}

function extractTitles(response: SerpApiResponse, maxTitles: number = 12): TitleInfo[] {
  const knowledgeTitles = Array.isArray(response.knowledge_graph)
    ? response.knowledge_graph.slice(0, maxTitles).map((item) => ({
        title: item.title,
        link: item.link,
        thumbnail: item.thumbnail,
      }))
    : [];

  const visualMatchTitles = response.visual_matches.slice(0, maxTitles).map((item) => ({
    title: item.title,
    link: item.link,
    thumbnail: item.thumbnail,
  }));

  return knowledgeTitles.length > 0 ? knowledgeTitles : visualMatchTitles;
}

//Here goes api key from the https://serpapi.com/manage-api-key
const api_key = '';

export default Canister({
  getLens: update([text], text, async (q) => {
      const response =  await ic.call(managementCanister.http_request, {
          args: [
              {
                  url: `https://serpapi.com/search?engine=google_lens&url=${q}&api_key=${api_key}`,
                  max_response_bytes: Some(100_000n),
                  method: {
                      get: null
                  },
                  headers: [],
                  body: None,
                  transform: Some({
                      function: [ic.id(), 'getLensTransform'] as [
                          Principal,
                          string
                      ],
                      context: Uint8Array.from([])
                  })
              }
          ],
          cycles: 84_128_800n
      });
      const titlesInfo = extractTitles(processResponse(response.body), 12);
      const resultJson: string = JSON.stringify(titlesInfo);
      return resultJson;
  }),
  getLensTransform: query([HttpTransformArgs], HttpResponse, (args) => {
      return {
          ...args.response,
          headers: []
      };
  }),
  getFirebaseCredentials: query([], text, () => {
    // Here goes api credentials from the https://console.firebase.google.com
    return JSON.stringify({
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    });
  }),
  getOpenAiCredentials: query([], text, () => {
    //Here goes api key from: https://platform.openai.com/api-keys
    return JSON.stringify({
      apiKey: "",
      dangerouslyAllowBrowser: true
    });
  }),
});

function processResponse(blob: AllowSharedBufferSource | undefined) {
  try {
      const textDecoder = new TextDecoder('utf-8');
      const text = textDecoder.decode(blob);
      const jsonData = JSON.parse(text);

      return jsonData;
  } catch (error) {
      console.error('Error:', error);
      return "Error: An exception occurred while processing the response.";
  }
}