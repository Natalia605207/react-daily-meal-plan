import saladPhoto from '../assets/saladBowl.png';

const DetailedNotesInformation = ({getActiveMeal, updateDay}) => {

    const editMyMeal = (myInput, value) => {
        updateDay ({
            ...getActiveMeal,
            [myInput]: value
        })
    }

    if (!getActiveMeal) return <img className="saladBowl" src={saladPhoto} alt="salad" />

    return <div className="whole-plan">
            <p className="title">Fill in the fields</p>
            <input
            maxLength={20}
            type="text"
            placeholder="Enter a day"
            className="myInput common"
            id="title"
            value={getActiveMeal.title}
            onChange={(e) => editMyMeal("title", e.target.value)}
            />

            <textarea
            className="common"
            placeholder="Breakfast:"
            id="breakfast"
            value={getActiveMeal.breakfast}
            onChange={(e) => editMyMeal("breakfast", e.target.value)}
            />

            <textarea
            className="common"
            placeholder="Lunch:"
            id="lunch"
            value={getActiveMeal.lunch}
            onChange={(e) => editMyMeal("lunch", e.target.value)}
            />

            <textarea
            className="common"
            placeholder="Dinner:"
            id="dinner"
            value={getActiveMeal.dinner}
            onChange={(e) => editMyMeal("dinner", e.target.value)}
            />

            <textarea
            className="common"
            placeholder="Snack:"
            id="snack"
            value={getActiveMeal.snack}
            onChange={(e) => editMyMeal("snack", e.target.value)}
            />

            <textarea
            className="common"
            placeholder="List of ingredients"
            id="snack"
            value={getActiveMeal.ingredients}
            onChange={(e) => {editMyMeal("ingredients", e.target.value)}}
            />
    </div>
}

export default DetailedNotesInformation;