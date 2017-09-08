//jest.dontMock('../components/matchup/matchup');
//
//import React from 'react';
//import ReactDOM from 'react-dom';
//import TestUtils from 'react-addons-test-utils';
//
//const Group = require('../components/group/group').default;
//
//describe('Bracket', () => {
//    let matchup;
//    let matchupNode;
//
//    it('should be defined', () => {
//        let seed = 2;
//        let name = 'SOME_GROUP';
//        matchup = TestUtils.renderIntoDocument(
//            <Matchup seed={seed}
//                     name={name}
//                     matchup={null}
//            />
//        );
//
//        matchupNode = ReactDOM.findDOMNode(matchup);
//
//        expect(matchup).toBeDefined();
//    });
//
//    it('should include a prop seed of type string', () => {
//        expect(group).not.toBeDefined();
//    })
//
//});