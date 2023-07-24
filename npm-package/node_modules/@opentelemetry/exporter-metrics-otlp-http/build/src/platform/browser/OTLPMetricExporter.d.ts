import { ResourceMetrics } from '@opentelemetry/sdk-metrics';
import { OTLPMetricExporterOptions } from '../../OTLPMetricExporterOptions';
import { OTLPMetricExporterBase } from '../../OTLPMetricExporterBase';
import { OTLPExporterBrowserBase, OTLPExporterConfigBase } from '@opentelemetry/otlp-exporter-base';
import { IExportMetricsServiceRequest } from '@opentelemetry/otlp-transformer';
declare class OTLPExporterBrowserProxy extends OTLPExporterBrowserBase<ResourceMetrics, IExportMetricsServiceRequest> {
    constructor(config?: OTLPMetricExporterOptions & OTLPExporterConfigBase);
    getDefaultUrl(config: OTLPExporterConfigBase): string;
    convert(metrics: ResourceMetrics[]): IExportMetricsServiceRequest;
}
/**
 * Collector Metric Exporter for Web
 */
export declare class OTLPMetricExporter extends OTLPMetricExporterBase<OTLPExporterBrowserProxy> {
    constructor(config?: OTLPExporterConfigBase & OTLPMetricExporterOptions);
}
export {};
//# sourceMappingURL=OTLPMetricExporter.d.ts.map