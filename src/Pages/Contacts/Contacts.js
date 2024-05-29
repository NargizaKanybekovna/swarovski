import './Contacts.css';

function Contacts() {
	return (
		<>
			<section class="contact">
				<div class="container">
					<h2 class="page_tit">Contact Us</h2>

					<form action="" class="form form_book">
						<div class="form_in flex">
							<div class="form_input">
								<span class="form_tit">Name</span>
								<input type="text" class="input" placeholder="Enter your name" />
							</div>
							<div class="form_input">
								<span class="form_tit">Email</span>
								<input type="text" class="input" placeholder="Enter email address" />
							</div>
							<div class="form_input form_input_big">
								<span class="form_tit">Subject</span>
								<input type="text" class="input" placeholder="Write a subject" />
							</div>
							<div class="form_input form_input_big">
								<span class="form_tit">Message</span>
								<input type="text" class="input" placeholder="Write your message" />
							</div>
							<div class="form_btn">
								<button class="btn btn_red" type="submit">Send</button>
							</div>
						</div>
					</form>
				</div>
				<div class="address">
					<div class="container">
						<div class="address_in flex">
							<div class="address_card">
								<h2 class="address_tit">Call Us:</h2>
								<a href="" class="address_link"> 00800 3242 5056</a>
							</div>
							<div class="address_card">
								<h4 class="address_tit">Hours:</h4>
								<p class="address_txt">Mon-Th: 8am - 17pm </p>
								<p class="address_txt">Fr: 8am - 12pm</p>
							</div>
							<div class="address_card">
								<h4 class="address_tit">FOR EUROPE AND THE REST OF THE WORLD
									CUSTOMER SERVICE:</h4>
								<p class="address_txt">Swarovski-Optik AG & Co KG</p>
								<p class="address_txt">Daniel-Swarovski-Straße 706067 Absam</p>
								<p class="address_txt">Austria</p>
							</div>
						</div>
					</div>
				</div>
			</section>




		</>
	);
}

export default Contacts;