import React , {Component} from 'react'
import {withRouter , Link} from 'react-router-dom'

class  Sidebar extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.location.pathname)
        console.log('sidebar')
        this.state = {
            activeClass : "active" 
        }
    }

    componentDidMount(){
        switch (this.props.location.pathname) {
            case "/features/fts_default_grid.html":
                const defaultGrid = document.getElementsByClassName('defaultGrid')[0];
                      defaultGrid.classList.add(this.state.activeClass)

                break;
                case "/features/fts_divided_container.html":
                    const dividedContainer = document.getElementsByClassName('dividedContainer')[0];
                          dividedContainer.classList.add(this.state.activeClass)

                break;
                case "/features/fts_magic_grid.html":
                    const magicGrid = document.getElementsByClassName('magicGrid')[0];
                          magicGrid.classList.add(this.state.activeClass)

                break;
        
            default:
                break;
        }
       
    }
    
    
render(){
    return (
        <div className="ui twelve wide tablet three wide computer three wide widescreen three wide large screen column">
                
                <div className="sticky-element sticky-desktop sticky-large-desktop under-ths">
                   
                    <div className="dashboard-sticky">
                        <div className="dashboard-sticky-inner">
                            <div className="dashboard-menu has-submenu">
                                <Link to ="#" className="item">
                                    <i className="icon icon-side-sticky-menu"></i>
                                </Link>
                                <ul className="submenu">
    <li>
    <div className="ui accordion ">
    
       <div className="title accordion-trigger ">
           <Link to = "#" className="">Getting started</Link>
       </div>
       <div className="content ">
           <div className="accordion">
               <div className="title"><Link to ="fts_getting_started.html#getting-started" className="item">General Info</Link></div>
               <div className="title"><Link to ="fts_getting_started.html#installation" className="item">Installation</Link></div>
               <div className="title"><Link to ="fts_getting_started.html#whats-included" className="item">What's Included</Link></div>
               <div className="title"><Link to ="fts_getting_started.html#html" className="item">HTML Structure</Link></div>
               <div className="title"><Link to ="fts_getting_started.html#less" className="item">Compiling LESS</Link></div>
               <div className="title"><Link to ="fts_getting_started.html#fonts" className="item">Changing Fonts</Link></div>
               <div className="title"><Link to ="fts_getting_started.html#vector-icons" className="item">Vector Icons</Link></div>
               <div className="title"><Link to ="fts_getting_started.html#optimization" className="item">Site Optimization</Link></div>
           </div>
       </div>
    
        <div className="title accordion-trigger active">
            <a  className="">Layout</a>
        </div>
        <div className="content active">
           <div className="accordion">
               <div className = "defaultGrid title"><Link to ="fts_default_grid.html" className="item">Default Grid</Link></div>
               <div className=" dividedContainer title "><Link to ="fts_divided_container.html" className="item">Divided Container</Link></div>
               <div className="magicGrid title "><Link to ="fts_magic_grid.html" className="item">Magic Grid</Link></div>
           </div>
        </div>
    
    
        <div className="title accordion-trigger ">
            <a className="">Components</a>
        </div>
        <div className="content ">
           <div className="accordion">
                <div className="title "><Link to ="fts_header.html" className="item">Header</Link></div>
                <div className="content"></div>
    
                <div className="title accordion-trigger "><a className="item">Menus</a></div>
                <div className="content ">
                   <div className="accordion">
                       <div className="title "><Link to ="fts_menu.html" className="item">Menu Default</Link></div>
                       <div className="title "><Link to ="fts_dashboard_menu.html" className="item">Dashboard Menu</Link></div>
                   </div>
                </div>
                
               <div className="title "><Link to ="fts_logo.html" className="item">Logo</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_buttons.html" className="item">Buttons</Link></div>
               <div className="content"></div>
               
               <div className="title "><Link to ="fts_icons.html" className="item">Icons</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_form_elements.html" className="item">Form Elements</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_floating_placeholder.html" className="item">Floating Placeholder</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_sticky_element.html" className="item">Sticky Element</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_property_items.html" className="item">Property Items</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_articles.html" className="item">Articles</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_promo_section.html" className="item">Promo Section</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_modals.html" className="item">Modals</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_accordion.html" className="item">Accordion</Link></div>
               <div className="content"></div>
    
    
               <div className="title accordion-trigger "><a className="item">Hero Search</a></div>
               <div className="content ">
                   <div className="accordion">
                       <div className="title "><Link to ="fts_hero_search_horizontal.html" className="item">Hero Seach Horizontal</Link></div>
                       <div className="title "><Link to ="fts_hero_search_vertical.html" className="item">Hero Seach Vertical</Link></div>
                   </div>
    
                </div>
    
               <div className="title accordion-trigger "><a className="item">Carousel</a></div>
               <div className="content ">
                   <div className="accordion">
                       <div className="title "><Link to ="fts_slick_carousel.html" className="item">Slick Carousel</Link></div>
                       <div className="title "><Link to ="fts_slick_hero_big.html" className="item">Slick Hero Big</Link></div>
                       <div className="title "><Link to ="fts_slick_full_page_search.html" className="item">Slick Full Page Search</Link></div>
                   </div>
    
                </div>
    
               <div className="title "><Link to ="fts_charts.html" className="item">Charts</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_progressbar.html" className="item">Progressbar</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_hamburger_icon.html" className="item">Hamburger Icon</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_calendar.html" className="item">Calendar</Link></div>
               <div className="content"></div>
    
               <div className="title "><Link to ="fts_price_range_slider.html" className="item">Price Range Slider</Link></div>
               <div className="content"></div>
    
           </div>
    
        </div>
    
        <div className="title accordion-trigger ">
            <a className="">Content</a>
        </div>
        <div className="content ">
           <div className="accordion">
               <div className="title "><Link to ="fts_typography.html" className="item">Typography</Link></div>
               <div className="title "><Link to ="fts_code.html" className="item">Code</Link></div>
               <div className="title "><Link to ="fts_image.html" className="item">Image</Link></div>
               <div className="title "><Link to ="fts_image_gallery.html" className="item">Image Gallery</Link></div>
               <div className="title "><Link to ="fts_table.html" className="item">Table</Link></div>
           </div>
        </div>
    </div>
    </li>
    </ul>                                </div>
                        </div>
                    </div>
                </div>
                
           </div>
           
    )
}


    
}

export default withRouter(Sidebar)
