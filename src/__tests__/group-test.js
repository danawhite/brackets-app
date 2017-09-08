//jest.dontMock('../components/group/group');
//
//import React from 'react';
//import ReactDOM from 'react-dom';
//import TestUtils from 'react-addons-test-utils';
//
//const Group = require('../components/group/group').default;
//
//describe('Bracket', () => {
//    let group;
//    let groupNode;
//
//    it('should be defined', () => {
//        let seed = 2;
//        let name = 'SOME_GROUP';
//
//        group = TestUtils.renderIntoDocument(
//            <Group seed={seed}
//                   name={name}
//            />
//        );
//
//        groupNode = ReactDOM.findDOMNode(group);
//
//        //expect(group.seed).toEqual(2);
//    });
//
//    it('should include a prop seed of type string', () => {
//        expect(group).not.toBeDefined();
//    });
//
//    it('should send GROUP_SELECTED action when clicked', () => {
//        TestUtils.Simulate.click(
//            TestUtils.findRenderedDOMComponentWithTag(group, 'div')
//        );
//    })
//
//});