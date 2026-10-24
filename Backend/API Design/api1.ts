 interface Organization{
    id: string ; 
    name: string ; 
    status: "active" | "inactive" ;
    description?:string; 
    createdAt: Date; 
    updatedAt: Date;
}

interface Project{
    id: string; 
    name: string; 
    organizationId: string; 
    status: "planned"|"in-progress"|"completed"|"on-hold";
    description?: string ; 
    createdAt: Date;
    updatedAt: Date;
}

interface User{
    title: string; 
    projectId: string;
    status: "active" | "inactive" | "suspended";
    priority: "low" | "medium" | "high";
    assignedTo: string;
    assignedAt: Date;
    description?:string;
    createdAt: Date;
    updatedAt: Date;
}