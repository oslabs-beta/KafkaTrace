import { OTLPExporterConfigBase } from '@opentelemetry/otlp-exporter-base';
import { AggregationTemporality } from '@opentelemetry/sdk-metrics';
export interface OTLPMetricExporterOptions extends OTLPExporterConfigBase {
    temporalityPreference?: AggregationTemporalityPreference | AggregationTemporality;
}
export declare enum AggregationTemporalityPreference {
    DELTA = 0,
    CUMULATIVE = 1,
    LOWMEMORY = 2
}
//# sourceMappingURL=OTLPMetricExporterOptions.d.ts.map