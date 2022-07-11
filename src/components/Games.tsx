import { Link } from "react-router-dom";

const Games = () => {

    return(
        <div className="row">
            <div className="column">
                <Link to="/eldenRing"><img className="large" src={require('../images/large/elden-ring.webp')} alt=""/></Link>
                <Link to="/rdr2"><img className="large" src={require('../images/large/rdr2.jpg')} alt=""/></Link>
                <Link to="/mortal-kombat"><img className="small" src={require('../images/small/mortal-kombat.jpg')} alt=""/></Link>
                <Link to="/witcher"><img className="small" src={require('../images/small/witcher.jpg')} alt=""/></Link>
                <Link to="/bloodBorn"><img className="small" src={require('../images/small/blood-born.jpg')} alt=""/></Link>
                <Link to="/darkSouls"><img className="small" src={require('../images/small/dark-souls.webp')} alt=""/></Link>
            </div>

            <div className="column">
                <Link to="fortnite"><img style={{marginRight: "5px"}} className="small" src={require('../images/small/fortnite.jpg')} alt=""/></Link>
                <Link to="dota2"><img className="small" src={require('../images/small/dota2.jpg')} alt=""/></Link>
                <Link to="zeroDawn"><img className="small" src={require('../images/small/horizon.jpg')} alt=""/></Link>
                <Link to="houseFlipper"><img className="small" src={require('../images/small/house-flipper.jpg')} alt=""/></Link>
                <Link to="satisfactory"><img className="large" src={require('../images/large/satisfactory.png')} alt=""/></Link>
                <Link to="rainBow"><img className="large" src={require('../images/large/rainbow.webp')} alt=""/></Link>
            </div>

            <div className="column">
                <Link to="/forza"><img className="large" src={require('../images/large/forza.webp')} alt=""/></Link>
                <Link to="/wow"><img className="small" src={require('../images/small/wow.jpeg')} alt=""/></Link>
                <Link to="/wow2"><img className="small" src={require('../images/small/wow2.jpg')} alt=""/></Link>
                <Link to="/bioShock"><img className="small" src={require('../images/small/bioshock.jpg')} alt=""/></Link>
                <Link to="/ac"><img className="small" src={require('../images/small/ac.jpg')} alt=""/></Link>
                <Link to="/godOfWar"><img className="large" src={require('../images/large/god-of-war.jpg')} alt=""/></Link>
            </div>

            <div className="column">
                <Link to="/spiderMan"><img className="large" src={require('../images/large/spider-man.webp')} alt=""/></Link>
                <Link to="/hellblade"><img className="large" src={require('../images/large/hellblade.jpg')} alt=""/></Link>
                <Link to="/cod"><img className="large" src={require('../images/large/cod.jpg')} alt=""/></Link>
            </div>

            <div className="column">
                <Link to="/vanguard"><img className="large" src={require('../images/large/Call_of_Duty_Vanguard_cover_art.jpg')} alt=""/></Link>
                <Link to="/sekiro"><img className="large" src={require('../images/large/Sekiro_art.jpg')} alt=""/></Link>
                <Link to="/cyberpunk"><img className="small" src={require('../images/small/Cyberpunk_2077_box_art.jpg')} alt=""/></Link>
                <Link to="/dirt"><img className="small" src={require('../images/small/Dirt_5_cover_art.jpg')} alt=""/></Link>
                <Link to="/tsushima"><img className="small" src={require('../images/small/Ghost_of_Tsushima.jpg')} alt=""/></Link>
                <Link to="/farcry6"><img className="small" src={require('../images/small/Far_cry_6_cover.jpg')} alt=""/></Link>
            </div>

            <div className="column">
                <Link to="/lastOfUs2"><img className="large" src={require('../images/large/TLOU_P2_Box_Art_2.png')} alt=""/></Link>
                <Link to="/west"><img className="small" src={require('../images/small/Horizon_Forbidden_West_cover_art(1).jpg')} alt=""/></Link>
                <Link to="/valhalla"><img className="small" src={require('../images/small/valhalla.jpg')} alt=""/></Link>
                <Link to="/itTakesTwo"><img className="small" src={require('../images/small/It_Takes_Two_cover_art.png')} alt=""/></Link>
                <Link to="/mortalKombat"><img className="small" src={require('../images/small/Mortal_Kombat_11_cover_art.png')} alt=""/></Link>
                <Link to="/mafia"><img className="large" src={require('../images/large/Mafia_Definitive_Edition.jpg')} alt=""/></Link>
            </div>

            <div className="column">
                <Link to="/hitman"><img className="small" src={require('../images/small/Hitman_3_Packart.jpg')} alt=""/></Link>
                <Link to="/gtaV"><img className="small" src={require('../images/small/Grand_Theft_Auto_V.png')} alt=""/></Link>
                <Link to="/justCause"><img className="small" src={require('../images/small/Just_Cause_4_cover.jpg')} alt=""/></Link>
                <Link to="/minecraft"><img className="small" src={require('../images/small/Minecraft_cover.png')} alt=""/></Link>
                <Link to="/residentEvil"><img className="large" src={require('../images/large/Resident_Evil_Village.png')} alt=""/></Link>
                <Link to="/milesMorales"><img className="large" src={require('../images/large/Spider-Man_Miles_Morales.jpg')} alt=""/></Link>
            </div>
        </div>
    )
}
export default Games;