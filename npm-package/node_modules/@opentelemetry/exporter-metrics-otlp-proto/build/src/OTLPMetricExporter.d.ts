import { OTLPMetricExporterOptions } from '@opentelemetry/exporter-metrics-otlp-http';
import { ServiceClientType, OTLPProtoExporterNodeBase } from '@opentelemetry/otlp-proto-exporter-base';
import { ResourceMetrics } from '@opentelemetry/sdk-metrics';
import { OTLPMetricExporterBase } from '@opentelemetry/exporter-metrics-otlp-http';
import { OTLPExporterNodeConfigBase } from '@opentelemetry/otlp-exporter-base';
import { IExportMetricsServiceRequest } from '@opentelemetry/otlp-transformer';
declare class OTLPMetricExporterNodeProxy extends OTLPProtoExporterNodeBase<ResourceMetrics, IExportMetricsServiceRequest> {
    constructor(config?: OTLPExporterNodeConfigBase & OTLPMetricExporterOptions);
    convert(metrics: ResourceMetrics[]): IExportMetricsServiceRequest;
    getDefaultUrl(config: OTLPExporterNodeConfigBase): string;
    getServiceClientType(): ServiceClientType;
}
export declare class OTLPMetricExporter extends OTLPMetricExporterBase<OTLPMetricExporterNodeProxy> {
    constructor(config?: OTLPExporterNodeConfigBase & OTLPMetricExporterOptions);
}
export {};
//# sourceMappingURL=OTLPMetricExporter.d.ts.map