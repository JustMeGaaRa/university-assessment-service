import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { IAssessmentProfile, ICompetency } from "../models";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const competencies = Array.from<ICompetency>(context.bindings.competencies);
    const assessmentProfiles = Array.from<IAssessmentProfile>(context.bindings.assessmentProfiles);
    const entity: IAssessmentProfile = req.body ? req.body : {};

    switch (req.method) {
        case "GET":
            context.res = { body: assessmentProfiles };
            break;
        case "POST":
            entity.creationDate = new Date(Date.now()).toDateString();
            entity.competencies = competencies;
            context.bindings.assessmentProfile = JSON.stringify(entity);
            context.res = { body: assessmentProfiles.concat(entity) };
            break;
        case "PUT":
            context.bindings.assessmentProfile = JSON.stringify(entity);
            context.res = { body: assessmentProfiles.concat(entity) };
            break;
        case "DELETE":
            const id = parseInt(req.params["id"]);
            context.res = { body: assessmentProfiles.filter(x => x.id !== id) };
            break;
    }
};

export default httpTrigger;
