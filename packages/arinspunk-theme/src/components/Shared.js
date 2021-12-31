// File: /packages/arinspunk-theme/src/components/Shared.js
import { styled} from "frontity";

export const Container = styled.div`
    width: 100%;
    max-width: 1480px;
    padding: 0 40px;
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -40px;
`;

export const Col12 = styled.div`
    width: calc(100% - 40px);
    margin-right: 40px;
    text-align: ${props =>
        props.centered ? 'center' : 'left'
    };
`;

export const Col6 = styled.div`
    width: calc(50% - 40px);
    margin-right: 40px;
`;

export const Col3 = styled.div`
    width: calc(25% - 40px);
    margin-right: 40px;
`;

export const Centered = styled.div`
    display: flex;
    justify-content: center;
`;