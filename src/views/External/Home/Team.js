import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Title from './TeamComponents/Title'
import Interns from './TeamComponents/Interns'
import AdvisoryBoard from './TeamComponents/Advisory_board'
import FoundingTeam from './TeamComponents/Founding_team'
import NotableAlum from './TeamComponents/Notable_alum'


function Team() {
  return (
    <div>
    <Header />
    <Box>
      <div className="Team"> 
      <Title />
      <FoundingTeam />
      <AdvisoryBoard />
      <Interns />
      <NotableAlum />
      </div>
    </Box>
    <Footer/>
    </div>
  );
}

const Box = styled.section`
  * {
  margin: 0;
  padding: 0;
}

.Team {
  width: 100%;
}

.wrapper1 {
  margin: 0 60px 0 60px;
}

.wrapper2 {
  margin: 0 60px 0 60px;
  border-radius: 50px;
  background-color: #ebfaf6;
}
.wrapper3 {
  margin: 60px 60px 0 60px;
  border-radius: 50px;
  background-color: #cadcff;
}
.wrapper4 {
  margin: 60px 60px 60px 60px;
  border-radius: 50px;
  background-color: #ebfaf6;
}

.Title {
  width: 100%;
  padding-top: 80px;
  text-align: center;
  color: #00c9a6;
  font-weight: bold;
  font-size: 60px;
}

.foundingTeam {
  width: 100%;
  padding: 50px 0px 30px 0px;
  text-align: center;
  color: #387dff;
  font-weight: bold;
  font-size: 40px;
}

.advisoryBoard {
  margin: 0 40px 0 40px;
  padding: 40px 20px 20px 20px;
  text-align: center;
  color: #00c9a6;
  font-weight: bold;
  font-size: 40px;
}

.interns {
  margin: 20px 30px 0 30px;
  padding: 40px 20px 20px 20px;
  text-align: center;
  color: #387dff;
  font-weight: bold;
  font-size: 40px;
}

.alumni {
  margin: 20px 30px 0 30px;
  padding: 40px 20px 20px 20px;
  text-align: center;
  color: #00c9a6;
  font-weight: bold;
  font-size: 40px;
}

.members {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.person {
  padding: 50px;
  max-width: 300px;
  min-width: none;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.person p {
  text-align: center;
  width: 100%;
}

.person .name {
  padding-top: 15px;
  font-weight: bold;
}

.person .title {
  color: grey;
  font-weight: bold;
}

.person .org {
  padding-top: 5px;
}

.headshot {
  max-width: 200px;
  min-width: none;
  max-height: 200px;
  min-height: none;
  border-radius: 100px;
}

.person .linkedinLogo {
  padding-top: 10px;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.slides .person {
  margin: auto;
}

.slides {
  display: none;
}

/* when viewed on cellphones  */
@media only screen and (max-width: 600px) {
  .slides {
    display: block;
  }

  .members {
    display: none;
  }

  .wrapper1 {
    margin: 0 30px 0 30px;
    height: 570px;
  }

  .wrapper2 {
    height: 680px;
    margin: 50px 30px 0 30px;
    border-radius: 30px;
  }
  .wrapper2 .person p {
    font-size: 15px;
  }
  .wrapper3 {
    height: 580px;
    margin: 60px 30px 0 30px;
    border-radius: 30px;
  }
  .wrapper4 {
    height: 550px;
    margin: 60px 30px 60px 30px;
    border-radius: 30px;
  }

  .Title {
    font-size: 30px;
  }

  .foundingTeam {
    font-size: 25px;
  }

  .advisoryBoard {
    font-size: 25px;
  }

  .interns {
    font-size: 25px;
  }

  .alumni {
    font-size: 25px;
  }
}

/* when viewed on extremely small screens  */
@media only screen and (max-width: 330px) {
  .wrapper2 .person p {
    font-size: 12px;
  }
  .person p {
    font-size: 12px;
  }
  .wrapper1 {
    height: 500px;
  }

  .wrapper2 {
    height: 680px;
  }

  .wrapper3 {
    height: 520px;
  }

  .foundingTeam {
    font-size: 23px;
  }

  .advisoryBoard {
    font-size: 23px;
  }

  .interns {
    font-size: 23px;
  }

  .alumni {
    font-size: 23px;
  }
}
`;

export default Team;
