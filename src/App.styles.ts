import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const Wrapper = styled.div`
    margin: 20px 100px;
`;

export const CartOpenButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`;