import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Pagination";

describe("Paginator component tests", () => {
    test('pages count is 21 but should be showed only 20', () => {
        const component = create(<Paginator totalItemsCount={21} pageSize={1} portionSize={20} />);
        const root = component.root;
        let spans = root.findAllByType('span');
        expect(spans.length).toBe(20);
    });

    test('if pages count is more then 20 button NEXT should be present', () => {
        const component = create(<Paginator totalItemsCount={21} pageSize={1} portionSize={20} />);
        const root = component.root;
        let button = root.findAllByType('button');
        expect(button.length).toBe(1);
    });
});