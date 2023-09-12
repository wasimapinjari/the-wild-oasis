import styled from "styled-components";

const StyledBanner = styled.div`
  color: var(--color-grey-700);
`;

function Banner() {
  return (
    <StyledBanner>
      — Data mutations (create, update, delete) are deactivated in this demo app
    </StyledBanner>
  )
}

export default Banner;
