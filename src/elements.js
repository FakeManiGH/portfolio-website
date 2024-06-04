import styled from 'styled-components';

// NavBar
const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 8px;

    .burger_btn {
        display: none;
        font-size: 1.2rem;
        padding: 1.2rem .9rem;
        cursor: pointer;
        color: #e6e6e6;
        border-radius: 5px;

        &:hover {
            background: linear-gradient(135deg, #399c39 0%, #405030 100%);
            color: #fff;
        }
    }

    @media (max-width: 768px) {

        .burger_btn {
            display: flex;
            align-self: flex-end;
        }
    }
`;

// Navigation
const MainNavigation = styled.nav`
    display: flex;
    box-sizing: border-box;
    gap: 8px;

    a {
        color: #e6e6e6;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        padding: 1rem;
        border-radius: 5px;
        transition: background 0.3s, color 0.3s;

        &:hover {
            background: linear-gradient(135deg, #399c39 0%, #405030 100%);
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
            color: #fff;
        }

        &.active {
            background: linear-gradient(135deg, #399c39 0%, #405030 100%);
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
            color: #fff;
        }
    }

    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        width: 100%;
        text-align: center;
        margin-top: 8px;
    }
`;

// SocialNav
const SocialNav = styled.nav`
    display: flex;
    gap: 5px;

    a {
        color: #e6e6e6;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 600;
        padding: .7rem;
        border-radius: 5px;
        transition: background 0.3s, color 0.3s;

        &:hover {
            background: linear-gradient(135deg, #399c39 0%, #405030 100%);
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
            color: #fff;
        }

        &.active {
            background: linear-gradient(135deg, #399c39 0%, #405030 100%);
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
            color: #fff;
        }
    }
`;

// Main
const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 40px 20px 140px 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

// Section
const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 20px 0;
`;

const CompactList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: .95rem;
    list-style: disc;
    padding: 0 0 0 40px;
    margin: 0;
    color: #e6e6e6;
`;

const SubList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    list-style: circle;
    font-size: .95rem;
    padding: 0 0 0 40px;
    margin: 0;
    color: #e6e6e6;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    flex-wrap: wrap;
    font-size: 1rem;
    padding: 20px;
    background: #151515;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    transition: background 0.3s, color 0.3s;

    p {
        font-size: .9rem;
    }

    &:hover {
        transition 0.3s;
        background: #111;
    }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: .4rem .6rem;
    border: none;
    background: linear-gradient(135deg, #399c39 0%, #405030 100%);
    color: #e6e6e6;
    width: -moz-fit-content;
    width: fit-content;
    font-family: 'Roboto', sans-serif;
    font-size: .95rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: gap 0.3s, background 0.3s, box-shadow 0.3s, color 0.3s;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);

    &:hover {
        color: #111;
        gap: 10px;
    }

    &.active {
        border: 3px solid #e6e6e6;
    }
`;

const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
`;

const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const AutoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;

    & img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }
`;

const Grid2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Accordion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;




// Exports
export { NavBar };
export { MainNavigation };
export { SocialNav };
export { Main };
export { Section };
export { List, CompactList, SubList };
export { ListItem };
export { Button };
export { RowFlex, ColumnFlex};
export { AutoGrid, Grid2 };
export { Accordion };