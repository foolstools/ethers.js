/// <reference types="node" />
import { BatchConnectionInfo, ConnectionInfo } from '@ethersproject/web';
import { JsonRpcProvider } from "./json-rpc-provider";
import { Networkish } from '@ethersproject/networks';
export declare class JsonRpcBatchProvider extends JsonRpcProvider {
    _pendingBatchAggregator: NodeJS.Timer;
    _pendingBatch: Array<{
        request: {
            method: string;
            params: Array<any>;
            id: number;
            jsonrpc: "2.0";
        };
        resolve: (result: any) => void;
        reject: (error: Error) => void;
    }>;
    _batchDuration: number;
    constructor(url?: BatchConnectionInfo | ConnectionInfo | string, network?: Networkish);
    send(method: string, params: Array<any>): Promise<any>;
}
//# sourceMappingURL=json-rpc-batch-provider.d.ts.map