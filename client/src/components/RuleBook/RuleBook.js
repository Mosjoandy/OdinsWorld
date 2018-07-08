import React from 'react';
import './RuleBook.css';

const RuleBook = () => { 
     
    return(
		<div className="book_wrapper">
		<a id="next_page_button"></a>
		<a id="prev_page_button"></a>
		<div id="loading" className="loading">Loading pages...</div>
		<div id="mybook" style={{"display":"none"}}>
			<div className="b-load">
				<div>
					<h2>Odin's Ravens</h2>
					<p>This is a story of Odin's Ravens, Huginn and Muninn, who are sent to watch 
					the land. They race each other around the world, heading in opposite directions, 
					and the raven that reaches a full loop is the winner. They can ask for help 
					from Loki, who can either help or hinder the lands before them.</p>
					<img src="https://res.cloudinary.com/mosjoandy/image/upload/v1531008017/OdinsRavensDesignGarbage/odinthing.png" />
				</div>
				<div>
					<img src="https://res.cloudinary.com/mosjoandy/image/upload/v1531008020/OdinsRavensDesignGarbage/odinraven.png" />
					<h2>Goal</h2>
					<p>Let the racing begin! The first player controlling their raven fly across 
					the land and complete the loop is the winner.</p>
					<h2>Components</h2>
					The Game World:
					<ul>
						<li>16 Land Cards</li>
						<li>Player One White Raven</li>
						<li>Player Two Black Raven</li>
					</ul>
				</div>
				<div>
					<h2>Flying</h2>
					<p>To move a raven, the player must play a Flight Card from their hand, which 
					must match the corresponding Land Card displayed in front of their raven. Clicking 
					on the appropriate Land Card will move the raven as many Lands that match in a row.
					</p>
					<img src="https://res.cloudinary.com/mosjoandy/image/upload/v1531008016/OdinsRavensDesignGarbage/odinraven1card.png" />
					<p>A player may also spend TWO of the same Flight Cards to move over any Land Card.</p>
					<img src="https://res.cloudinary.com/mosjoandy/image/upload/v1531008013/OdinsRavensDesignGarbage/odinraven2card.png" />
				</div>
				<div>
					<h2>Trickery</h2>
					<p>Players have the option of drawing Loki Cards instead of Land Cards whenever 
					they have an opportunity to draw. Loki Cards can be played to manipulate the world,
					move either white or black raven forwards or backwards, or draw cards*. Once a Loki 
					Card is played, it is removed from the game.</p>
					<div className="row">
								<img src="https://res.cloudinary.com/mosjoandy/image/upload/v1531008011/OdinsRavensDesignGarbage/odinravenLokiRule1.png" />
							<ul>
								<li>Move your raven forward in the world</li>
								<hr />
								<li>Move your opponent's raven backwards in the world</li>
							</ul>
								<img src="https://res.cloudinary.com/mosjoandy/image/upload/v1531008011/OdinsRavensDesignGarbage/odinravenLokiRule2.png" />
							<ul>
								<li>Rotate a Land Card 180°</li>
								<hr />
								<li>Remove a Land Card from the world</li>
							</ul>
								<img src="https://res.cloudinary.com/mosjoandy/image/upload/v1531008012/OdinsRavensDesignGarbage/odinravenLokiRule3.png" />
							<ul>
								<li>Swap any two Land Cards without rotating them</li>
								<hr />
								<li>Remove half a Land Card in the world</li>
							</ul>
								<img src="https://res.cloudinary.com/mosjoandy/image/upload/v1531008011/OdinsRavensDesignGarbage/odinravenLokiRule4.png" />
							<ul>
								<li>Draw two extra cards, either Land or Loki</li>
								<hr />
								<li>Add two new Land Cards to the world</li>
							</ul>
					</div>
					<p>* Loki Cards cannot be played on a Land Card that is occupied by a raven.</p>
				</div>
				<div>
					<h2>Playing The Game</h2>
					<p>When both players have connected to the game, each player will draw draw 5 
					cards either Flight or Loki. Once both players have 5 cards in their hands, the game 
					will begin.</p>
					<img src="https://res.cloudinary.com/mosjoandy/image/upload/v1531006858/OdinsRavensDesignGarbage/Thing.png" />
					<h2 />
					<p>Turn:</p>
					<ul>
						<li>Play in any order either Flight or Loki Cards to move their raven, 
						or manipulate the world.</li>
						<li>When the player is satisfied, or has no more cards to play, the player 
						will draw 3 new cards from either Land or Loki Decks.*</li>
					</ul>
					<p>* - A player must discard down to 7 cards at the end of the draw phase.</p>
				</div>
				<div>
					<h2>Ending The Game</h2>
					<p>Any raven that traverses the entire world and completes the loop will 
					be declared the winner. However, if Player One completes their loop, Player 
					Two will have an opportunity to play their turn. If both Players complete their 
					loops, the game is a draw!</p>
					<p>Orginal Credits: </p>
					<ul>
						<li>Game Design by Thornsten Gimmler</li>
						<li>Cover and Card Art by Johan Egerkrans</li>
						<li>Osprey Publishing, part of Bloomsbury Publishing Plc</li>
						<li>PO Box 883, Oxford, OX1 9PL, UK</li>
						<li>2015 Thorsten Gimmler & Osprey Publishing Ltd.</li>
					</ul>
					<p>Digital Credits: </p>
					<ul>
						<li>Jesse Lofland</li>
						<li>Maria Ortero</li>
						<li>Nicholas Chan</li>
						<li>Berkeley Coding Bootcamp</li>
						<li>2018</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	);
};

export default RuleBook;