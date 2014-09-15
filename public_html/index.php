<?php include 'header.php'; ?>



	<section class="hero section">
		<div class="mobile_logo"><img src="/assets/img/codebrewer-icon-alt.png" alt=""></div>
    	<div class="title-text">
    		<h1>The <span class="highlight">Code</span>Brewers</h1>
    		<h2>Bring your website into the <span class="highlight">mobile</span> world.</h2>
	    	<i class="fa fa-angle-double-down wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.4s"></i>
    	</div>
	</section>
 

	<?php include 'portfolio.php'; ?>

	<section class="process section" id="Process">
		<div class="container">
			<h2>Our Process: Design <span class="highlight">&amp;</span> Develop</h2>
			<article>
				<div class="row develop_icons">
					<div class="develop_icon"><i class="fa fa-search"></i></div>
					<div class="develop_icon"><i class="fa fa-paint-brush"></i></div>
					<div class="develop_icon"><i class="fa fa-code"></i></div>
					<div class="develop_icon"><i class="fa fa-database"></i></div>
					<div class="develop_icon"><i class="fa fa-cog"></i></div>
					<div class="develop_icon"><i class="fa fa-paper-plane-o"></i></div>
				</div>
				<div class="row">
				<div class="mobiletext">
					<h4><i class="fa fa-search highlight"></i> Finding the project needs</h4>
					<p>We speak directly to you and work out how your new website will be most effective in reaching your audience.</p>
				</div>	
				<div class="mobiletext">
					<h4><i class="fa fa-paint-brush highlight"></i> Solving the project needs with Design</h4>
					<p>Based on our experience and what will best suit your business we design solutions that meet the needs of you and your audience.</p>
				</div>
				<div class="mobiletext">
					<h4><i class="fa fa-code highlight"></i> Coding out the design</h4>
					<p>Using the latest web development standards we build your site in way that's optimized for search engines.</p>
				</div>
				<div class="mobiletext">
					<h4><i class="highlight fa fa-database"></i> Setting Up the Database and CMS</h4>
					<p>If your new website requires it, we install a suitable content management solution that's easy for you to access and edit.</p>
				</div>
				<div class="mobiletext">
					<h4><i class="highlight fa fa-cog"></i> Responsive and Cross-browser testing</h4>
					<p>We make sure that your site always looks beautiful on the most widely used devices.</p>
				</div>	
				<div class="mobiletext">
					<h4><i class="highlight fa fa-paper-plane-o"></i> Launch</h4>
					<p>Once you are happy with your new website we set you up with hosting and release it in the wild.</p>
				</div>
				</div>
			</article>
			<div class="mobile-first-button">
				<a href="/mobile-first.php" class="mobile-first-button">Learn More</a>
			</div>
		</div>
	</section>

	<section class="contact_section section" id="Contact">
		<div class="container">
			<div class="contact">
				<div class="form contact_form">
					<form id="contact_form" name="contactform" role="form">
						<legend>Let's work together</legend>
					
						<div class="form-group">
							<label for="full_name">Name</label>
							<input type="text" name="full_name" required=""  class="form-control" id="" >
						</div>

						<div class="form-group">
							<label for="email">Email</label>
							<input type="text" name="email"  required="" class="form-control" id="" >
						</div>
						<div class="form-group">
							<label for="comments">Message</label>
							<textarea type="textarea" rows="6" name="comments" class="form-control" id=""></textarea>
						</div>
						<div class="form-group submit">
							<button href="javascript:void(0);" class="send_form submit-button">Submit</button>
						</div>
					</form>
				</div>
				<div class="success">
					<h2>We will be in touch soon.</h2>
					<p>In the meantime, ask yourself the following questions:</p>
					<p>1. What makes my company <span class="highlight">remarkable</span>?</p>
					<p>2. Who are my <span class="highlight">target customers</span>?</p>
					<p>3. What do I consider a <span class="highlight">successful</span> website?</p>
				</div>
			</div>
		</div>
	</section>

<?php include 'footer.php'; ?>





