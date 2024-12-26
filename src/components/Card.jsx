

export default function Card({ firstName, lastName, phoneNumber, gender, imageSrc }) {
    return (
        <div id="box">
            <div id="card">
                <div className="img-box">
                    <img src={imageSrc} alt={firstName}  className="profile-img"/>
                </div>
                <div className="detail">
                    <h1>Name: {firstName} {lastName}</h1>
                    <h4>Gender: {gender}</h4>
                    <h3>Phone no: {phoneNumber}</h3>
                </div>
            </div>
        </div>
    )
}
