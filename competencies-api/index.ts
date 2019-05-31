import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ICompetency } from "../models";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const competencies = Array.from<ICompetency>(context.bindings.competencies);
    const entity: ICompetency = req.body ? req.body : {};

    switch (req.method) {
        case "GET":
            context.res = { body: competencies };
            break;
        case "POST":
        case "PUT":        
            context.bindings.competency = JSON.stringify(entity);
            context.res = { body: competencies.concat(entity) };
            break;
        case "DELETE":
            const id = req.params["id"];
            context.res = { body: competencies.filter(x => x.id !== id) };
            break;
    }
};

export default httpTrigger;
