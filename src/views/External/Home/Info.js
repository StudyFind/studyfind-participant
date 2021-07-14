import styled from "styled-components";
function Info(props) {
  return (
    <Bio>
      {/* FIX/REMOVE INLINE */}
      <Crop>
        <Image
          src={props.image}
          alt={props.alt}
          style={{
            right: `${props.right}`,
            bottom: `${props.bottom}`,
            height: `${props.height}`,
          }}
        />
      </Crop>
      <Title>{props.name}</Title>
    </Bio>
  );
}
const Bio = styled.div`
  margin: 30px 0;
  z-index: 99;
`;
const Crop = styled.div`
  position: relative;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border: 2px black solid;
  border-radius: 50%;
`;

const Title = styled.p`
  text-align: center;
  font-weight: bold;
`;
const Image = styled.img`
  display: inline;
  position: relative;
  z-index: 2;
  width: auto;
  left: 0px;
  height: 100%;
  object-fit: cover;
`;
export default Info;
