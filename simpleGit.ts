import { GitManager } from "./gitManager";
import { BranchInfo, FileStatusResult } from "./types";

export class SimpleGit extends GitManager {
    status(): Promise<{
        changed: FileStatusResult[];
        staged: string[];
        conflicted: string[];
    }> {
        throw new Error("Method not implemented.");
    }
    commitAll(message?: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
    pull(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    push(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    canPush(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    checkRequirements(): Promise<"valid" | "missing-repo" | "wrong-settings" | "missing-git"> {
        throw new Error("Method not implemented.");
    }
    branchInfo(): Promise<BranchInfo> {
        throw new Error("Method not implemented.");
    }
    checkout(branch: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    init(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    setConfig(path: string, value: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getConfig(path: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    fetch(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}