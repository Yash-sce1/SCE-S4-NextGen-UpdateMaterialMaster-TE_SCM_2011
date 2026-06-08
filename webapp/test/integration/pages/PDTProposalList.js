sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.sce.materialmaster',
            componentId: 'PDTProposalList',
            contextPath: '/PDTProposal'
        },
        CustomPageDefinitions
    );
});