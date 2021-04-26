import {Project} from "./projects";

export interface status {
    status: string
    data: Object
}

export class StatusMessages {
    public static readonly NOT_FOUND = "UNABLE TO LOCATE RESOURCE";
    public static readonly FOUND = "OK";
}
