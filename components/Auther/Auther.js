import React, {Fragment} from 'react';

const Author = (props) => {

    return (
        <Fragment>
            <div className="author-box">
                <div className="author-avatar">
                    <Link href="/" target="_blank"><img src='/images/blog-details/author.jpg' alt="" /></Link>
                </div>
                <div className="author-content">
                    <Link href="/" className="author-name">Author: Jenny Watson</Link>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                    <div className="socials">
                        <ul className="social-link">
                            <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                            <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                            <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default Author;