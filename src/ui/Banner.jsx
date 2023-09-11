import styled from "styled-components";

const StyledBanner = styled.div`
  color: #F8F0E5;
`;

function Banner() {
  return (
    <StyledBanner>
      — Data mutations (create, update, delete) are deactivated in this demo app
    </StyledBanner>
  )
}

export default Banner;
