
const Review = () => {
    return (
        <div className="mx-auto">
            <h2 className="text-center text-3xl font-bold">Customers <span className="text-orange-500">Review</span></h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5
            text-center">
                <div className="border p-5">
                    <h3>Their service is good.</h3>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
                <div className="border p-5">
                    <h3>Their service is good.</h3>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
                <div className="border p-5">
                    <h3>Their service is good.</h3>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;