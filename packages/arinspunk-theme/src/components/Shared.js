// File: /packages/arinspunk-theme/src/components/Shared.js
import { styled} from "frontity";

const gutterDesktop = "40px";
const gutterTablet = "30px";
const gutterMobile = "20px";

export const Container = styled.div`
    width: 100%;
    max-width: 1480px;
    padding: 0 ${gutterDesktop};
    margin: 0 auto;
    @media all and (max-width: 991px) {
        padding: 0 ${gutterTablet};
    }
    @media all and (max-width: 767px) {
        padding: 0 ${gutterMobile};
    }
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -${gutterDesktop};
    @media all and (max-width: 991px) {
        margin-right: -${gutterTablet};
    }
    @media all and (max-width: 767px) {
        margin-right: -${gutterMobile};
    }
`;

export const Col12 = styled.div`
    width: calc(100% - ${gutterDesktop});
    margin-right: ${gutterDesktop};
    text-align: ${props =>
        props.centered ? 'center' : 'left'
    };
    @media all and (max-width: 991px) {
        width: calc(100% - ${gutterTablet});
        margin-right: ${gutterTablet};
    }
    @media all and (max-width: 767px) {
        width: calc(100% - ${gutterMobile});
        margin-right: ${gutterMobile};
    }
`;

export const Col6 = styled.div`
    width: calc(50% - ${gutterDesktop});
    margin-right: ${gutterDesktop};
    @media all and (max-width: 991px) {
        width: calc(100% - ${gutterTablet});
        margin-right: ${gutterTablet};
    }
    @media all and (max-width: 767px) {
        width: calc(100% - ${gutterMobile});
        margin-right: ${gutterMobile};
    }
`;

export const Col3 = styled.div`
    width: calc(25% - ${gutterDesktop});
    margin-right: ${gutterDesktop};
    @media all and (max-width: 991px) {
        width: calc(25% - ${gutterTablet});
        margin-right: ${gutterTablet};
    }
    @media all and (max-width: 767px) {
        width: calc(100% - ${gutterMobile});
        margin-right: ${gutterMobile};
    }
`;

export const Centered = styled.div`
    display: flex;
    justify-content: center;
`;