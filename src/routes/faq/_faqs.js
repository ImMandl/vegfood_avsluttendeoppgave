const faqs = [
	{
		title: 'Hvem lager oppskriftene?',
		slug: 'hvem-lager-oppskriftene',
		html: `
			<p>Proin vulputate sodales vulputate. Vestibulum tincidunt vel leo ut auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a facilisis nisi. Pellentesque vestibulum commodo tortor eget tempor. </p>'
		`
	},

	{
		title: 'Hvorfor mener dere at vi ikke skal spise kjøtt?',
		slug: 'hvorfor-mener-dere-at-vi-ikke-skal-spise-kjøtt',
		html: `
			<p>Vestibulum vel venenatis purus. Cras pulvinar ante condimentum, commodo felis eget, vestibulum lacus. Etiam nec malesuada metus. Praesent feugiat, risus sit amet commodo pretium, leo enim facilisis quam, eu dapibus felis metus eu libero.</p>
	`
	},

	{
		title: 'Hvem samarbeider dere med?',
		slug: 'hvem-samarbeider-dere-med',
		html: `
			<p>Integer dignissim ligula a lacus molestie, at blandit ex mollis. Etiam pulvinar nisi eget rutrum lacinia. Duis ut commodo orci. Praesent in augue placerat, sagittis tellus et, condimentum neque. Quisque mollis ornare ante ac tempor. Nam sed ligula bibendum, tristique neque quis, fringilla velit. Vestibulum vestibulum porta consectetur. Suspendisse tempor in urna vel mattis. Suspendisse pulvinar felis pellentesque malesuada sagittis</p>
			
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
			</ul>
	
			`
	},
	{
		title: 'Hvorfor har dere laget denne siden?',
		slug: 'hvorfor-har-dere-laget-denne-siden',
		html: `
			<p>Integer dignissim ligula a lacus molestie, at blandit ex mollis. Etiam pulvinar nisi eget rutrum lacinia. Duis ut commodo orci. Praesent in augue placerat, sagittis tellus et, condimentum neque. Quisque mollis ornare ante ac tempor. Nam sed ligula bibendum, tristique neque quis, fringilla velit. Vestibulum vestibulum porta consectetur. Suspendisse tempor in urna vel mattis. Suspendisse pulvinar felis pellentesque malesuada sagittis</p>
	`
	},
	{
		title: 'Jeg finner ikke noen oppskrifter jeg liker',
		slug: 'jeg-finner-ikke-noen-oppskrifter-jeg-liker',
		html: `
			<p>Integer dignissim ligula a lacus molestie, at blandit ex mollis. Etiam pulvinar nisi eget rutrum lacinia. Duis ut commodo orci. Praesent in augue placerat, sagittis tellus et, condimentum neque. Quisque mollis ornare ante ac tempor. Nam sed ligula bibendum, tristique neque quis, fringilla velit. Vestibulum vestibulum porta consectetur. Suspendisse tempor in urna vel mattis. Suspendisse pulvinar felis pellentesque malesuada sagittis</p>
	`
	},
	{
		title: 'Hvor holder dere til?',
		slug: 'hvor-holder-dere-til',
		html: `
			<p>Integer dignissim ligula a lacus molestie, at blandit ex mollis. Etiam pulvinar nisi eget rutrum lacinia. Duis ut commodo orci. Praesent in augue placerat, sagittis tellus et, condimentum neque. Quisque mollis ornare ante ac tempor. Nam sed ligula bibendum, tristique neque quis, fringilla velit. Vestibulum vestibulum porta consectetur. Suspendisse tempor in urna vel mattis. Suspendisse pulvinar felis pellentesque malesuada sagittis</p>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.0373977333764!2d10.736109829283837!3d59.913064671180486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDU0JzQ3LjAiTiAxMMKwNDQnMTIuMCJF!5e0!3m2!1sno!2sno!4v1587121196222!5m2!1sno!2sno" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			`
	},
	{
		title: 'Kan jeg foreslå en oppskrift?',
		slug: 'kan-jeg-foreslå-en-oppskrift',
		html: `
			<p>Integer dignissim ligula a lacus molestie, at blandit ex mollis. Etiam pulvinar nisi eget rutrum lacinia. Duis ut commodo orci. Praesent in augue placerat, sagittis tellus et, condimentum neque. Quisque mollis ornare ante ac tempor. Nam sed ligula bibendum, tristique neque quis, fringilla velit. Vestibulum vestibulum porta consectetur. Suspendisse tempor in urna vel mattis. Suspendisse pulvinar felis pellentesque malesuada sagittis</p>
	`
	},
	{
		title: 'Jeg savner en type oppskrift?',
		slug: 'jeg-savner-en-type-oppskrift',
		html: `
			<p>Integer dignissim ligula a lacus molestie, at blandit ex mollis. Etiam pulvinar nisi eget rutrum lacinia. Duis ut commodo orci. Praesent in augue placerat, sagittis tellus et, condimentum neque. Quisque mollis ornare ante ac tempor. Nam sed ligula bibendum, tristique neque quis, fringilla velit. Vestibulum vestibulum porta consectetur. Suspendisse tempor in urna vel mattis. Suspendisse pulvinar felis pellentesque malesuada sagittis</p>
	`
	},
	{
		title: "Hvorfor har dere ikke mulighet til 'en ting'?",
		slug: 'hvorofr-har-dere-ikke-mulighet-til-en-ting',
		html: `
			<p>Integer dignissim ligula a lacus molestie, at blandit ex mollis. Etiam pulvinar nisi eget rutrum lacinia. Duis ut commodo orci. Praesent in augue placerat, sagittis tellus et, condimentum neque. Quisque mollis ornare ante ac tempor. Nam sed ligula bibendum, tristique neque quis, fringilla velit. Vestibulum vestibulum porta consectetur. Suspendisse tempor in urna vel mattis. Suspendisse pulvinar felis pellentesque malesuada sagittis</p>
	`
	},
	{
		title: 'Er dere på twitter?',
		slug: 'er-dere-paa-twitter',
		html: `
			<p>Integer dignissim ligula a lacus molestie, at blandit ex mollis. Etiam pulvinar nisi eget rutrum lacinia. Duis ut commodo orci. Praesent in augue placerat, sagittis tellus et, condimentum neque. Quisque mollis ornare ante ac tempor. Nam sed ligula bibendum, tristique neque quis, fringilla velit. Vestibulum vestibulum porta consectetur. Suspendisse tempor in urna vel mattis. Suspendisse pulvinar felis pellentesque malesuada sagittis</p>
	`
	}
];

faqs.forEach((faq) => {
	faq.html = faq.html.replace(/^\t{3}/gm, '');
});

export default faqs;
