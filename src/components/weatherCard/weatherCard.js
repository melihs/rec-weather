import React from "react";
import "./weatherCard.scss";

export default function weatherCard({data}) {
    return (
        <div className="md:container md:mx-auto bg-white shadow-sm rounded-md m-4 p-4">
            <div className="flex flex-row">
                <div className="basis-1/4"> Date: {data.date}</div>
                <div className="basis-1/4">
                    <div className="flex flex-col">
                        <div>{data.day.condition.text}</div>
                        <div>min: {data.day.mintemp_c} C°</div>
                        <div>max: {data.day.maxtemp_c} C°</div>
                    </div>
                </div>
                <div className="basis-1/4 bg-center bg-no-repeat bg-auto"
                     style={{backgroundImage: `url("${data.day.condition.icon}")`, width: '300px', height: '100px'}}>
                </div>
            </div>
        </div>
    );
}
