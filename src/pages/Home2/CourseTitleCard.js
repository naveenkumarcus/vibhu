import styled from "styled-components";
import styledComponents from "styled-components";

const Container = styledComponents.div`

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400|Lora');

$sans-serif: 'Open Sans', sans-serif;
$serif: 'Lora', serif;

body {
  background: #CBC0D3;
}

/* div box styling */
.cardcontainer {
  margin: auto;
  width: 40rem;
  height: 18rem;
  position: relative;
  margin: 1rem;
}

.welcome {
  background: #f6f6f6;
  width: 40rem;
  height: 16rem;
  position: absolute;
  top: 25%;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0,0,0,.1);
}

.titlebox {
    position: absolute;
    top: -6%;
    left: 5%;
    background: #ffdf6b;
    width: 16rem;
    height: 18rem;
    border-radius: 5px;
    box-shadow: 2px 0 10px rgb(0 0 0 / 10%);
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    z-index: 2;

    &:hover {
      transform: translateX(95%);
    }
}

.nodisplay {
  display:none;
  transition: all .5s ease;
}

.leftbox, .rightbox {
  position: absolute;
  width: 50%;
  transition: 1s all ease;
}

.leftbox {
  left: -2%;
}
.rightbox {
  right: 2%;
}

/* font & button styling */
h1 {
  font-family: $sans-serif;
  text-align: center;
  margin-top: 95px;
  text-transform: uppercase;
  color: #f6f6f6;
  font-size: 2em;
  letter-spacing: 8px;
}

.title {
  font-family: $serif;
  color: #8E9AAF;
  font-size: 1.8em;
  line-height: 1.4em;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 300;
  margin-top: 20%;
}
.desc {
  margin-top: -8px;
}
.account {
  margin-top: 45%;
  font-size: 10px;
}
p {
  font-family: $sans-serif;
  font-size: .7em;
  letter-spacing: 2px;
  color: #8E9AAF;
  text-align: center;
}

span {
  color: #f39237;
}

.flower {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 46%;
  left: 29%;
  opacity: .7;
}

.smaller {
  width: 90px;
  height: 100px;
  top: 48%;
  left: 38%;
  opacity: .9;
}

button {
  padding: 12px;
  font-family: $sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 11px;
  border-radius: 10px;
  margin: auto;
  outline: none;
  display: block;
  &:hover {
    background: #EAC7CC;
    color: #f6f6f6;
    transition: background-color 1s ease-out;
  }
}

.button {
  margin-top: 3%;
  background: #f6f6f6;
  color: darken(#EAC7CC, 20%);
  border: solid 1px #EAC7CC;
}

.checkbox {
  display: inline;
  white-space: nowrap;
  position: relative;
  left: -62px;
  top: 5px;
}

input[type=checkbox] {
  width: 7px;
  background: darken(#EAC7CC, 20%);
}

.checkbox input[type="checkbox"]:checked + label {
  color: darken(#EAC7CC, 20%);
  transition: .5s all ease;
}

`;

const StyledIcon = styled.img`
    height: 8rem;
    text-align: center;
    display: block;
    margin: 4rem auto;
`;
export const CourseTitleCard = ({ data }) => {
  return (
    <Container>
      <div className="cardcontainer">
        <div className="welcome">
          <div className="titlebox">
            <StyledIcon src={data.icon} alt="icon" height={60}/>
          </div>
          <div className="leftbox">
          </div>
          <div className="rightbox">
            <h2 className="title">
              <span>{data.title}</span>
              <br />
              {data.titleHindi}
            </h2>
            <p className="desc">
              lorem Ipsum is simply dummy
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
