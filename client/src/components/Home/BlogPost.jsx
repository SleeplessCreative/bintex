import React from 'react';
import Zoom from 'react-reveal/Zoom';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      altImage: this.props.altImage,
      title: this.props.title,
      subtitle: this.props.subtitle,
      goto: this.props.goto
    };
  }
  render() {
    const { image, altImage, title, subtitle, goto } = this.state;
    return (
      <Zoom>
        <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-lg shadow-md lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <img
                src={image}
                alt={altImage}
                className="object-cover w-full rounded-lg lg:absolute h-80 lg:h-full"
              />
            </div>
            <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
              <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-primary-dark">
                {title}
              </h5>
              <p className="py-5 mb-5 text-opacity-75 text-primary-dark">{subtitle}</p>
              <div className="flex items-center">
                <a
                  href={goto}
                  className="inline-flex items-center text-lg underline transition-colors duration-200 text-accent hover:text-accent-dark"
                >
                  Read More
                  <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    );
  }
}

export default BlogPost;
