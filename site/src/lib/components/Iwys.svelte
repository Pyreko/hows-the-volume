<script lang="ts">
	interface Props {
		nephilimLabel: string | string[];
	}

	let { nephilimLabel }: Props = $props();

	const SPOTIFY_LINK = 'https://open.spotify.com/artist/7y1hO3QeftnOJmWCbzeZav';
	const TWITTER_LINK = 'https://twitter.com/irys_en';
	const YOUTUBE_LINK = 'https://www.youtube.com/@IRyS';
	const APPLE_MUSIC_LINK = 'https://music.apple.com/jp/artist/irys/1576219850';
</script>

<div>
	<p>
		Support {#if Array.isArray(nephilimLabel)}<a
				href={nephilimLabel[1]}
				target="_blank"
				rel="noopener noreferrer">{nephilimLabel[0]}</a
			>{:else}{nephilimLabel}{/if} on
		<a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">YouTube</a>,
		<a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">Twitter</a>,
		<a href={SPOTIFY_LINK} target="_blank" rel="noopener noreferrer">Spotify</a>, and
		<a href={APPLE_MUSIC_LINK} target="_blank" rel="noopener noreferrer">Apple Music</a>!
	</p>
</div>

<style>
	p {
		text-align: center;
		font-family: 'Riffic', sans-serif;
		color: #46003e;
		font-size: small;
		margin-top: 0.5rem;
	}
</style>
