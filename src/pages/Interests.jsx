import "./Interests.css";
import art from "../assets/art.jpg"
import dance from "../assets/dance.png"
import forensics from "../assets/forensics.png"
import history_img from "../assets/history_img.png"
import medical from "../assets/medical.jpg"
import plant from "../assets/plant.png"
import reading from "../assets/reading.png"
import tech from "../assets/tech.png"
import business from "../assets/business.png"
import crochet from "../assets/crochet.png"
import chess from "../assets/chess.png"
import law from "../assets/law.png"
import science from "../assets/science.png"
import travel from "../assets/travel.png"
import sports from "../assets/sports.png"
import rock from "../assets/rock.png"
import dragon_img from "../assets/UICircle_Icon.png"
import { Link } from "react-router-dom";

function Interests() {
  return (
    <main className="Interests">
      <img className="img" src={dragon_img} height="150px" width="150px"></img>
      <h1 className="interest_title">What do you <br></br> like to do?</h1>
      <div className="interest components">
        <div className="checkboxes_div">
          <div className="label_div">
            <input type="checkbox"></input>
            <label className="checkbox_label">academics</label>
          </div>
          <div className="label_div">
            <input type="checkbox"></input>
            <label className="checkbox_label">miscellaneous</label>
          </div>
        </div>
        <div class="vertical-menu">
          <a>
            <div className="interests-grid" id="pink_row"> 
                <div className="interest-card">
                  <img src={art} alt="art icon" className="icon" />
                  <div className="interest-label">Art</div>
                </div>
                <div className="interest-card">
                  <img src={plant} alt="art icon" className="icon" />
                  <div className="interest-label">Planting</div>
                </div>
                <div className="interest-card">
                  <img src={reading} alt="art icon" className="icon" />
                  <div className="interest-label">Reading</div>
                </div>
                <div className="interest-card">
                  <img src={history_img} alt="art icon" className="icon" />
                  <div className="interest-label">History</div>
                </div>
            </div>
          </a>
          <a>
            <div className="interests-grid" id="blue_row">
                <div className="interest-card">
                  <img src={medical} alt="art icon" className="icon" />
                  <div className="interest-label">Medical</div>
                </div>
                <div className="interest-card">
                  <img src={dance} alt="art icon" className="icon" />
                  <div className="interest-label">Dance</div>
                </div>
                <div className="interest-card">
                  <img src={forensics} alt="art icon" className="icon" />
                  <div className="interest-label">Forensics</div>
                </div>
                <div className="interest-card">
                  <img src={rock} alt="art icon" className="icon" />
                  <div className="interest-label">climbing</div>
                </div>
            </div>
          </a>
          <a>
            <div className="interests-grid" id="pink_row"> {/* Both cards go inside here */}
                <div className="interest-card">
                  <img src={tech} alt="art icon" className="icon" />
                  <div className="interest-label">Tech</div>
                </div>
                <div className="interest-card">
                  <img src={business} alt="art icon" className="icon" />
                  <div className="interest-label">business</div>
                </div>
                <div className="interest-card">
                  <img src={chess} alt="art icon" className="icon" />
                  <div className="interest-label">chess</div>
                </div>
                <div className="interest-card">
                  <img src={crochet} alt="art icon" className="icon" />
                  <div className="interest-label">crochet</div>
                </div>
            </div>
          </a>
          <a>
            <div className="interests-grid" id="blue_row"> {/* Both cards go inside here */}
                <div className="interest-card">
                  <img src={law} alt="art icon" className="icon" />
                  <div className="interest-label">law</div>
                </div>
                <div className="interest-card">
                  <img src={science} alt="art icon" className="icon" />
                  <div className="interest-label">science</div>
                </div>
                <div className="interest-card">
                  <img src={travel} alt="art icon" className="icon" />
                  <div className="interest-label">travel</div>
                </div>
                <div className="interest-card">
                  <img src={sports} alt="art icon" className="icon" />
                  <div className="interest-label">sports</div>
                </div>
            </div>
          </a>
        </div>
      </div>
      <div className="buttons_div">
        <Link to="/profile">
          <button className="profile_button3" type="button"><p className='button_text'>←</p></button>
        </Link>
        <Link to="/home">
          <button className="profile_button2" type="button"><p className='button_text'>→</p></button>
        </Link>
      </div>
    </main>
  );
}

export default Interests;