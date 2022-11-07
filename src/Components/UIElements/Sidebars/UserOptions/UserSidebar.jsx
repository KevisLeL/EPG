import React from 'react';

import './UserSidebar.scss';

const UserSidebar = (props) => {
	return (
		<div id="wrapper" className={props.isOpen ? 'toggled' : ''}>
			<div id="sidebar-wrapper">
				<ul className="sidebar-nav">
					<li className="sidebar-brand">
						<p>
							Welcome!
						</p>
					</li>
					<li>
						<p>SideBar Links</p>
					</li>
					<li>
						<p>May not</p>
					</li>
					<li>
						<p>Redirect</p>
					</li>
					<li>
						<p>To anywhere</p>
					</li>
					<li>
						<p>Close Sidebar</p>
					</li>
					<li>
						<p>by clicking on</p>
					</li>
					<li>
						<p>the User icon</p>
					</li>
				</ul>
			</div>
		</div>
	)
}; 

export default UserSidebar;