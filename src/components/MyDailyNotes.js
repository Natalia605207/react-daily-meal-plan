const MyDailyNotes = ({addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay}) => {
    return <div className="all-days">
        <div>
        <button className="button-add" onClick={addMeal}>
            <span className="button_text">Add a day</span>
            <span className="button_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
        </button>
        </div>
        <div>
            {mealPlans.map(({title, id, breakfast, lunch, dinner, snack}) => (
                <div key={id} 
                className={`meal ${id === selectedDay ? "selected" : "default"}`}
                onClick={() => setSelectedDay(id)}
                >
                    <p className="title">{title}</p>
                    <p className="field">{breakfast.substring(0,60)}</p>
                    <p className="field">{lunch.substring(0,60)}</p>
                    <p className="field">{dinner.substring(0,60)}</p>
                    <p className="field">{snack.substring(0,60)}</p>
                    <button className="button-delete" onClick={() => deleteDay(id)}>Delete</button>
                </div>
            ))}
        </div>
    </div>
}

export default MyDailyNotes;