sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/sce/materialmaster/test/integration/pages/PDTProposalList",
	"com/sce/materialmaster/test/integration/pages/PDTProposalObjectPage"
], function (JourneyRunner, PDTProposalList, PDTProposalObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/sce/materialmaster') + '/test/flp.html#app-preview',
        pages: {
			onThePDTProposalList: PDTProposalList,
			onThePDTProposalObjectPage: PDTProposalObjectPage
        },
        async: true
    });

    return runner;
});

