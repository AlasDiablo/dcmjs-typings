export default class TID1500MeasurementReport {
    constructor(TIDIncludeGroups: any);
    TIDIncludeGroups: any;
    ImageLibraryContentSequence: any[];
    CurrentRequestedProcedureEvidenceSequence: any[];
    PersonObserverName: {
        RelationshipType: string;
        ValueType: string;
        ConceptNameCodeSequence: {
            CodeValue: string;
            CodingSchemeDesignator: string;
            CodeMeaning: string;
        };
        PersonName: string;
    };
    tid1500: {
        ConceptNameCodeSequence: {
            CodeValue: string;
            CodingSchemeDesignator: string;
            CodeMeaning: string;
        };
        ContinuityOfContent: string;
        PerformedProcedureCodeSequence: any[];
        CompletionFlag: string;
        VerificationFlag: string;
        ReferencedPerformedProcedureStepSequence: any[];
        InstanceNumber: number;
        CurrentRequestedProcedureEvidenceSequence: any[];
        CodingSchemeIdentificationSequence: {
            CodingSchemeDesignator: string;
            CodingSchemeName: string;
            CodingSchemeVersion: string;
            CodingSchemeResponsibleOrganization: string;
        };
        ContentTemplateSequence: {
            MappingResource: string;
            TemplateIdentifier: string;
        };
        ContentSequence: ({
            RelationshipType: string;
            ValueType: string;
            ConceptNameCodeSequence: any;
            ConceptCodeSequence: any;
            ContentSequence: any;
            PersonName?: undefined;
            ContinuityOfContent?: undefined;
        } | {
            RelationshipType: string;
            ValueType: string;
            ConceptNameCodeSequence: {
                CodeValue: string;
                CodingSchemeDesignator: string;
                CodeMeaning: string;
            };
            PersonName: string;
            ConceptCodeSequence?: undefined;
            ContentSequence?: undefined;
            ContinuityOfContent?: undefined;
        } | {
            RelationshipType: string;
            ValueType: string;
            ConceptNameCodeSequence: any;
            ConceptCodeSequence: any;
            ContentSequence?: undefined;
            PersonName?: undefined;
            ContinuityOfContent?: undefined;
        } | {
            RelationshipType: string;
            ValueType: string;
            ConceptNameCodeSequence: {
                CodeValue: string;
                CodingSchemeDesignator: string;
                CodeMeaning: string;
            };
            ContinuityOfContent: string;
            ContentSequence: {
                RelationshipType: string;
                ValueType: string;
                ConceptNameCodeSequence: {
                    CodeValue: string;
                    CodingSchemeDesignator: string;
                    CodeMeaning: string;
                };
                ContinuityOfContent: string;
                ContentSequence: any[];
            };
            ConceptCodeSequence?: undefined;
            PersonName?: undefined;
        })[];
    };
    validate(): void;
    contentItem(derivationSourceDatasetOrDatasets: any, options?: {}): {
        ConceptNameCodeSequence: {
            CodeValue: string;
            CodingSchemeDesignator: string;
            CodeMeaning: string;
        };
        ContinuityOfContent: string;
        PerformedProcedureCodeSequence: any[];
        CompletionFlag: string;
        VerificationFlag: string;
        ReferencedPerformedProcedureStepSequence: any[];
        InstanceNumber: number;
        CurrentRequestedProcedureEvidenceSequence: any[];
        CodingSchemeIdentificationSequence: {
            CodingSchemeDesignator: string;
            CodingSchemeName: string;
            CodingSchemeVersion: string;
            CodingSchemeResponsibleOrganization: string;
        };
        ContentTemplateSequence: {
            MappingResource: string;
            TemplateIdentifier: string;
        };
        ContentSequence: ({
            RelationshipType: string;
            ValueType: string;
            ConceptNameCodeSequence: any;
            ConceptCodeSequence: any;
            ContentSequence: any;
            PersonName?: undefined;
            ContinuityOfContent?: undefined;
        } | {
            RelationshipType: string;
            ValueType: string;
            ConceptNameCodeSequence: {
                CodeValue: string;
                CodingSchemeDesignator: string;
                CodeMeaning: string;
            };
            PersonName: string;
            ConceptCodeSequence?: undefined;
            ContentSequence?: undefined;
            ContinuityOfContent?: undefined;
        } | {
            RelationshipType: string;
            ValueType: string;
            ConceptNameCodeSequence: any;
            ConceptCodeSequence: any;
            ContentSequence?: undefined;
            PersonName?: undefined;
            ContinuityOfContent?: undefined;
        } | {
            RelationshipType: string;
            ValueType: string;
            ConceptNameCodeSequence: {
                CodeValue: string;
                CodingSchemeDesignator: string;
                CodeMeaning: string;
            };
            ContinuityOfContent: string;
            ContentSequence: {
                RelationshipType: string;
                ValueType: string;
                ConceptNameCodeSequence: {
                    CodeValue: string;
                    CodingSchemeDesignator: string;
                    CodeMeaning: string;
                };
                ContinuityOfContent: string;
                ContentSequence: any[];
            };
            ConceptCodeSequence?: undefined;
            PersonName?: undefined;
        })[];
    };
    addTID1501MeasurementGroups(derivationSourceDatasets: any, options?: {}): void;
}
