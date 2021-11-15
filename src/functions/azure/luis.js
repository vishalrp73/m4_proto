export async function LUIS (query) {
    const response = await fetch (`https://australiaeast.api.cognitive.microsoft.com/luis/prediction/v3.0/apps/86071528-7fdd-4135-8c3f-104a25da03cb/slots/staging/predict?verbose=true&show-all-intents=true&log=true&subscription-key=79aa5e1066924a07bdf943a4b254251d&query=${query}`);
    const azureResponse = await response.json();
    return azureResponse;
}