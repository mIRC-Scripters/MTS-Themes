[mts]
Name Core
Author e2xo
EMail e2xo@hotmail.com
Website none
Description Very simple..yet so sexy. CoreIRC Default.
MTSVersion 1.0
Script Core.mrc

Load <pre> <c2>Core Loaded <c4>!
Unload <pre> <c2>Core Unloaded <c4>!

Scheme1 Grey
Scheme2 Blood
Scheme3 White
Scheme4 Baby
Scheme5 Goober

prefix  <c3>·<c4>!<c3>·
timestamp OFF
timestampFormat <c3>(<c4>hh:nntt<c3>)
parentext <c3>(<c2><text><c3>)
joinself <pre> <c2>Now Talking in <c4><chan> !
join <pre> <c4><nick> <c4>(<c3><address><c4>) <c2>joined <c4><chan> !
part <pre> <c4><nick> <c2>has left <c4><chan>.
kick <pre> <c4><nick> <c2>kicked <c3><knick> <c2>from <c4><chan> <c4>! <parentext>
kickself <pre> <c2>You were kicked from <c4><chan> <c2>by <c4><nick> <c4>! <parentext>
quit <pre> <c4><nick> <c2>has left IRC.
mode <pre> <c4><nick> <c4>(<c3><modes><c4>) <c2>on <c4><chan>
modeuser <pre> <c3>Usermode <c4>: <c4><modes>
textchan <c4>(<cmode><c2><nick><c4>) <c3><text>
textchanSelf <c4>(<cmode><c2><me><c4>) <c3><text>
actionchan <pre> <c4>(<c2><nick><c4>)- <c3><text>
actionchanSelf <pre> <c4>(<c2><me><c4>)- <c3><text>
noticechan <pre> <c4>[00n<c4>]<c2><target><c4>/<c2><nick><c4>) <c3><text>
notice <pre> <c4>(<c2><nick><c4>) <c3><text>
noticeself <pre> <c4>(<c2><me><c4>) <c3><text>
noticeselfChan <pre> <c4>(<c2><target><c4>/<c4><me><c4>) <c4><text>
textquery <c4>[<c2><nick><c4>] <c4><text>
textquerySelf <c4>[<c2><me><c4>] <c4><text>
actionquery <c4>[00ä<c4>]<c2><nick><c4><gt> <c3><text>
actionquerySelf <c4>(<c2><me><c4>)- <c3><text>
textmsg <pre> <c4>(<c2><nick><c4>)- <c3><text>
textmsgSelf <pre> <c4>(<c2><me><c4>)- <c3><text>
nick <pre> <c4><nick> <c2>is now known as <c4><newnick> <c4>!
nickself <pre> you're now known as <c4><newnick> <c4>!
invite <pre> <c4><nick> <c2>invites you to join <c4><chan> <c4>!
rejoin <pre> <c2>Trying to rejoin <c4>!
ctcp <pre> <c4><nick> <c4>[<c2><ctcp><c4>] <c3><text>
ctcpchan <pre> <c4><nick> <c4>[<c3><chan><c4>/<c2><ctcp><c4>] <c3><text>
ctcpself <pre> <c4><nick> <c4>[<c2><ctcp><c4>] <c3><text>
ctcpchanself <pre> <c4><chan> <c4>[<c2><ctcp><c4>] <c3><text>
ctcpreply <pre> <c4><nick> <c4>[<c2><ctcp><c4>/<target><c2>reply<c4>] <c3><text>
ctcpreplyself <pre> <c4><nick> <c4>[<c2><ctcp><c4>/<c3>reply<c4>] <c3><text>
notify <pre> <c4><nick> <c2>is <c3>O<c2>nline <c4>!
unotify <pre> <c4><nick> <c2>is <c3>O<c2>ffline <c4>!
servererror <pre> <c4>Error <c4>: <c3><text> <c4>!
dns <pre> <c2>Looking up <address>....
dnserror <pre> <c2>Unable to resolve <radress>
dnsresolve <pre> <c2>Resolved <address> to <raddress>
echo <pre> <text>
echotarget <pre> <c4><target> <text>
error <pre> <text>

Raw.001 <pre> <c2><text>
Raw.251 <pre> Number of Users : <c3><users> <c2>- <c2>Invisible : <c3><text> <c2>- <c2>Servers <c3><value>
Raw.252 <pre> Operators Online : <c3><value>
Raw.253 <pre> Unknown Connections : <c3><value>
Raw.254 <pre> Number of Channels formed : <c3><value>
Raw.263 <pre> Server is Too Loaded. Please Try Again Later.
Raw.272 <pre> End Of /Silence List.
Raw.281 <pre> End Of /Gline List.
Raw.305 <pre> <c3>You're back from away.
Raw.306 <pre> <c3>You're marked as being away.
Raw.323 <pre> End of /LIST
Raw.324 <pre> <c4><chan> <c2>modes are <c4>[<c3><modes><c4>]
Raw.332 <pre> <c4><chan> <c2>topic is <c4>[<c3>  <text>  <c4>]
Raw.333 <pre> <c2>Topic set by <c3><nick> <c4>[<c3><text><c4>]
Raw.341 <pre> <c4><nick> <c2>has been invited to join <c3><chan> <c4>
Raw.353 <pre> Listing Users on <c3><chan> <parentext>.
Raw.366 <pre> End of Names List For <c3><chan>.
Raw.372 <pre> Message Of The Day is <parentext>.
Raw.401 <pre> <c4><nick> <c2>No Such Nickname.
Raw.403 <pre> <c4><chan> <c2>No Such Channel
Raw.404 <pre> Unable To Send Messages to <c3><chan>.
Raw.405 <pre> Can't Join <c3><chan> <c2>channel has reached its limit.
Raw.406 <pre> Whowas on <c3><nick>: <c2>No Such Nick.
Raw.421 <pre> <c4><value> <c2>Invalid Command.
Raw.432 <pre> <c4><niick> <c2>Invalid Nickname
Raw.433 <pre> <c4><nick> <c2>Nickname  already in use.
Raw.436 <pre> Nickname collision with <c3><nick>
Raw.438 <pre> Nickname changed too fast, please wait a while and try again...
Raw.439 <pre> Target changed too fast, please wait a while and try again...
Raw.441 <pre> <c4><nick> <c2>is not on <c4><chan>
Raw.442 <pre> You're not on <c3><chan>
Raw.443 <pre> <c4><nick> <c2>is already on <c4><chan>
Raw.461 <pre> More parameters needed for: <c3><text>
Raw.465 <pre> Sorry, You're banned from this server.
Raw.471 <pre> <c4><chan> <c2>is full <c4>!
Raw.473 <pre> <c4><chan> <c2>is invite only <c4>!
Raw.474 <pre> <c4><chan> <c2>Banned <c4>!
Raw.475 <pre> <c4><chan> <c2>is password protected <c4>!
Raw.478 <pre> <c4><chan> <c2>ban list is full <c4>!
Raw.482 <pre> You're not a channel Operator on <c3><chan>
Raw.511 <pre> Your /Silence List Is Full.
Raw.512 <pre> Maximum Size for /WATCH
Raw.319 <pre>  <c4>Channels<c3>: <c3><chan>
Raw.312 <pre>  <c4>Server<c3>: <c3><wserver> <c2>[ <c3><serverinfo> <c2>]
Raw.301 <pre>  <c4>Away<c3>: <c3><away>
Raw.307 <pre>  <c4><nick> <c3><isregd> <c2>registered
Raw.309 <pre>  <c4>Admin<c3>: <c3>Yes
Raw.310 <pre>  <c4>Helper<c3>: <c3>Yes
Raw.313 <pre>  <c4> Ircop: <isoper>, <operline>
Raw.318 <c4>|------------------------------<c3>Whois<c3>------------------------------|
Raw.369 <c4>|------------------------------<c3>Whowas<c4>------------------------------|
Raw.318 <c4>|------------------------------<c3>Whois<c3>------------------------------|
Raw.311 !Script start 
Raw.317 !script signonidle
RAW.Other <c2><text>

CLINEOP 11
CLINEHOP 11
CLINEVOICE 11
CLINEREGULAR 00
CLINEOWNER 11
CLineCharOwner 11.
CLineCharOP 12•
CLineCharHOP 12%
CLineCharVoice 12+
CLineCharRegular 12

Colors 15,4,1,3,4,4,1,1,1,1,1,1,1,3,0,0,1,1,4,1,4,15,3,15,4,3
BaseColors 02,01,04,03
RGBColors 216,220,216 72,132,192 72,132,192 232,168,0 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 0,40,64
FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

[Scheme1]
Colors 15,4,1,3,4,4,1,1,1,1,1,1,1,3,0,0,1,1,4,1,4,15,3,15,4,3
BaseColors 02,01,04,03
RGBColors 216,220,216 128,128,128 72,132,192 192,192,192 255,255,255 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 0,0,0

[Scheme2]
Colors 15,4,1,3,4,4,1,1,1,1,1,1,1,3,0,0,1,1,4,1,4,15,3,15,4,3
BaseColors 02,01,04,03
RGBColors 255,255,255 224,0,0 72,132,192 255,28,24 176,176,176 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 24,0,0

[Scheme3]
Colors 15,4,1,3,4,4,1,1,1,1,1,1,1,3,0,0,1,1,4,1,4,15,3,15,4,3
BaseColors 02,01,04,03
RGBColors 64,0,64 0,64,128 72,132,192 0,128,192 0,128,255 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 255,255,255

[Scheme4]
COLORS 15,4,1,3,4,4,1,1,1,1,1,1,1,3,0,0,1,1,4,1,4,15,3,15,4,3
Basecolors 05,05,05,01
RGBColors  24,80,123 234,71,0 72,132,192 0,128,192 0,128,255 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 255,255,255

[Scheme5]
Colors 15,4,1,3,4,4,1,1,1,1,1,1,1,3,0,0,1,1,4,1,4,15,3,15,4,3
Basecolors 00,01,04,05
RGBcolors 35,124,12 42,164,12 72,132,192 192,192,192 255,255,255 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 64,164,248 0,0,0