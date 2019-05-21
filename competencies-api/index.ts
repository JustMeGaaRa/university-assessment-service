import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    switch (req.method) {
        case "POST":
            context.bindings.competency = JSON.stringify(req.body);
            break;
        case "DELETE":
            break;
        }
    
    context.res = {
        body: context.bindings.documents
    };
};

export default httpTrigger;
