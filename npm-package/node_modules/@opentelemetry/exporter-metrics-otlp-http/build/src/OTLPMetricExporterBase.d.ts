import { ExportResult } from '@opentelemetry/core';
import { AggregationTemporality, AggregationTemporalitySelector, InstrumentType, PushMetricExporter, ResourceMetrics } from '@opentelemetry/sdk-metrics';
import { OTLPMetricExporterOptions } from './OTLPMetricExporterOptions';
import { OTLPExporterBase } from '@opentelemetry/otlp-exporter-base';
import { IExportMetricsServiceRequest } from '@opentelemetry/otlp-transformer';
export declare const CumulativeTemporalitySelector: AggregationTemporalitySelector;
export declare const DeltaTemporalitySelector: AggregationTemporalitySelector;
export declare const LowMemoryTemporalitySelector: AggregationTemporalitySelector;
export declare class OTLPMetricExporterBase<T extends OTLPExporterBase<OTLPMetricExporterOptions, ResourceMetrics, IExportMetricsServiceRequest>> implements PushMetricExporter {
    _otlpExporter: T;
    private _aggregationTemporalitySelector;
    constructor(exporter: T, config?: OTLPMetricExporterOptions);
    export(metrics: ResourceMetrics, resultCallback: (result: ExportResult) => void): void;
    shutdown(): Promise<void>;
    forceFlush(): Promise<void>;
    selectAggregationTemporality(instrumentType: InstrumentType): AggregationTemporality;
}
//# sourceMappingURL=OTLPMetricExporterBase.d.ts.map