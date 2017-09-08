import expect, { expectSpy, spyOn, isSpy} from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Bracket from '../components/bracket/bracket';

const bracket = TestUtils.renderIntoDocument(
    <Bracket/>
);

describe('Bracket', () => {
    it('should be defined', () => {
        expect(bracket).toBeDefined();
    })
});



//jest.dontMock('../components/bracket/bracket');
//
//import React from 'react';
//import ReactDOM from 'react-dom';
//import TestUtils from 'react-addons-test-utils';
//
//const Bracket = require('../components/bracket/bracket').default;
//
//let bracket;
//let bracketNode;
//
//describe('Bracket', () => {
//
//    it('should be defined', () => {
//        bracket = TestUtils.renderIntoDocument(
//            <Bracket/>
//        );
//
//        bracketNode = ReactDOM.findDOMNode(bracket);
//
//        expect(bracket).toBeDefined();
//    });
//
//    it('should get appropriate groups for each region', () => {
//        let region = 'East';
//        let groups = [
//                {
//                    groupName: 'NWA',
//                    region: 'West',
//                    seed: 1
//                },
//                {
//                    groupName: 'ATCQ',
//                    region: 'East',
//                    seed: 2
//                },
//                {
//                    groupName: 'PRT',
//                    region: 'East',
//                    seed: 12
//                },
//                {
//                    groupName: 'EPMD',
//                    region: 'East',
//                    seed: 6
//                }
//        ];
//
//        bracket.getGroupsForRegion(groups, region);
//
//        expect(bracket.getGroupsForRegion(groups, region).length).toEqual(3);
//    });
//
// });