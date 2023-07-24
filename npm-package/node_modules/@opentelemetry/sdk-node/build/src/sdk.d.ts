import { ContextManager, TextMapPropagator } from '@opentelemetry/api';
import { IResource } from '@opentelemetry/resources';
import { MetricReader, View } from '@opentelemetry/sdk-metrics';
import { SpanProcessor } from '@opentelemetry/sdk-trace-base';
import { NodeTracerConfig } from '@opentelemetry/sdk-trace-node';
import { NodeSDKConfiguration } from './types';
/** This class represents everything needed to register a fully configured OpenTelemetry Node.js SDK */
export declare type MeterProviderConfig = {
    /**
     * Reference to the MetricReader instance by the NodeSDK
     */
    reader?: MetricReader;
    /**
     * List of {@link View}s that should be passed to the MeterProvider
     */
    views?: View[];
};
export declare class NodeSDK {
    private _tracerProviderConfig?;
    private _meterProviderConfig?;
    private _instrumentations;
    private _resource;
    private _resourceDetectors;
    private _autoDetectResources;
    private _tracerProvider?;
    private _meterProvider?;
    private _serviceName?;
    private _disabled?;
    /**
     * Create a new NodeJS SDK instance
     */
    constructor(configuration?: Partial<NodeSDKConfiguration>);
    /** Set configurations required to register a NodeTracerProvider */
    configureTracerProvider(tracerConfig: NodeTracerConfig, spanProcessor: SpanProcessor, contextManager?: ContextManager, textMapPropagator?: TextMapPropagator): void;
    /** Set configurations needed to register a MeterProvider */
    configureMeterProvider(config: MeterProviderConfig): void;
    /** Detect resource attributes */
    detectResources(): void;
    /** Manually add a resource */
    addResource(resource: IResource): void;
    /**
     * Once the SDK has been configured, call this method to construct SDK components and register them with the OpenTelemetry API.
     */
    start(): void;
    shutdown(): Promise<void>;
}
//# sourceMappingURL=sdk.d.ts.map