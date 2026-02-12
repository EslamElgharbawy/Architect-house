export default function TestmonialCard({ content, author, company }) {
  return (
    <>
      <div className="w-[400px] lg:w-[590px]">
        <div className="item carousel-item testimonial-item">
          <div className="testimonial-inner">
            <div className="testimonial_content text-white text-base leading-7">
              <p>{content}</p>
            </div>

            <div className="testimonial-caption pl-7 mt-5 text-[15px] text-white">
              <div className="testimonial-author  leading-7">{author}</div>
              <div className="testimonial-position opacity-70 mt-1 pb-2">
                {company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
