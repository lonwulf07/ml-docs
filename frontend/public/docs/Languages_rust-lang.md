# Rust-lang Documentation
> Scraped on: 2026-03-30 | Root Source: [https://www.rust-lang.org/learn](https://www.rust-lang.org/learn)



---

## Source: https://www.rust-lang.org/learn

# Learn Rust

## Get started with Rust

Affectionately nicknamed “the book,” The Rust Programming Language will give you an overview of the language from first principles. You’ll build a few projects along the way, and by the end, you’ll have a solid grasp of the language.

If reading multiple hundreds of pages about a language isn’t your style, then Rust By Example has you covered. While the book talks about code with a lot of words, RBE shows off a bunch of code, and keeps the talking to a minimum. It also includes exercises!

Alternatively, Rustlings guides you through downloading and setting up the Rust toolchain, and teaches you the basics of reading and writing Rust syntax, on the command line. It's an alternative to Rust by Example that works with your own environment.

## Documentation

### Read the core documentation

All of this documentation is also available locally using the `rustup doc`

command, which will open up these resources for you in your browser without requiring a network connection!

[The standard library](https://doc.rust-lang.org/std/index.html)

Comprehensive guide to the Rust standard library APIs.

[Edition Guide](https://doc.rust-lang.org/edition-guide/index.html)

Guide to the Rust editions.

[Cargo Book](https://doc.rust-lang.org/cargo/index.html)

A book on Rust’s package manager and build system.

[rustdoc Book](https://doc.rust-lang.org/rustdoc/index.html)

Learn how to make awesome documentation for your crate.

[rustc Book](https://doc.rust-lang.org/rustc/index.html)

Familiarize yourself with the knobs available in the Rust compiler.

[Compiler Error Index](https://doc.rust-lang.org/error-index.html)

In-depth explanations of the errors you may see from the Rust compiler.

### Build your skills in an application domain

[Command Line Book](https://rust-cli.github.io/book/index.html)

Learn how to build effective command line applications in Rust.

[Embedded Book](https://doc.rust-lang.org/embedded-book)

Become proficient with Rust for Microcontrollers and other embedded systems.

## Master Rust

Curious about the darkest corners of the language? Here’s where you can get into the nitty-gritty:

The Reference is not a formal spec, but is more detailed and comprehensive than the book.

[Read the reference](https://doc.rust-lang.org/reference/index.html)

The Rustonomicon is your guidebook to the dark arts of unsafe Rust. It’s also sometimes called “the ’nomicon.”

[Read the ’nomicon](https://doc.rust-lang.org/nomicon/index.html)

The Unstable Book has documentation for unstable features that you can only use with nightly Rust.

[Read the unstable book](https://doc.rust-lang.org/nightly/unstable-book/index.html)

---

## Source: https://www.rust-lang.org/

# Rust

##
A language empowering everyone

to build reliable and efficient software.

## Why Rust?

### Performance

Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages.

### Reliability

Rust’s rich type system and ownership model guarantee memory-safety and thread-safety — enabling you to eliminate many classes of bugs at compile-time.

### Productivity

Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager and build tool, smart multi-editor support with auto-completion and type inspections, an auto-formatter, and more.

## Build it in Rust

In 2018, the Rust community decided to improve the programming experience
for a few distinct domains (see [the 2018
roadmap](https://blog.rust-lang.org/2018/03/12/roadmap.html)). For these, you can find many high-quality crates and some
awesome guides on how to get started.

### Command Line

Whip up a CLI tool quickly with Rust’s robust ecosystem. Rust helps you maintain your app with confidence and distribute it with ease.

[Building Tools](/what/cli)

### WebAssembly

Use Rust to supercharge your JavaScript, one module at a time. Publish to npm, bundle with webpack, and you’re off to the races.

[Writing Web Apps](/what/wasm)

### Networking

Predictable performance. Tiny resource footprint. Rock-solid reliability. Rust is great for network services.

[Working On Servers](/what/networking)

### Embedded

Targeting low-resource devices? Need low-level control without giving up high-level conveniences? Rust has you covered.

[Starting With Embedded](/what/embedded)

## Rust in production

Hundreds of companies around the world are using Rust in production
today for fast, low-resource, cross-platform solutions. **From startups to large
corporations, from embedded devices to scalable web services, Rust is a great fit.**

## Get involved

### Read Rust

We love documentation! Take a look at the books available online, as well as key blog posts and user guides.

[Read the book](learn)

### Watch Rust

The Rust community has a dedicated YouTube channel collecting a huge range of presentations and tutorials.

[Watch the Videos](https://www.youtube.com/channel/UCaYhcUwRBNscFNUKTjgPFiA)

### Contribute code

Rust is truly a community effort, and we welcome contribution from hobbyists and production users, from newcomers and seasoned professionals. Come help us make the Rust experience even better!

[Read Contribution Guide](https://rustc-dev-guide.rust-lang.org/getting-started.html)

## Thanks

Rust would not exist without the generous contributions of time, work, and resources from individuals and companies. We are very grateful for the support!

### Individuals

Rust is a community project and is very thankful for the many community contributions it receives.

[See individual contributors](https://thanks.rust-lang.org/)

### Corporate sponsors

The Rust project receives support from companies through the Rust Foundation.

[See Foundation members](https://foundation.rust-lang.org/members)

---

## Source: https://www.rust-lang.org/tools/install

# Install Rust

## Using rustup (Recommended)

It looks like you’re running macOS, Linux, or another Unix-like OS. To download Rustup and install Rust, run the following in your terminal, then follow the on-screen instructions. See ["Other Installation Methods"](https://forge.rust-lang.org/infra/other-installation-methods.html) if you are on Windows.

`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`


It looks like you’re running Windows. To start using Rust, download the installer, then run the program and follow the onscreen instructions. You may need to install the [Visual Studio C++ Build tools](https://rust-lang.github.io/rustup/installation/windows-msvc.html) when prompted to do so. If you are not on Windows see ["Other Installation Methods"](https://forge.rust-lang.org/infra/other-installation-methods.html).

### Windows Subsystem for Linux

If you’re a Windows Subsystem for Linux user run the following in your terminal, then follow the on-screen instructions to install Rust.

`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`


To install Rust, if you are running a Unix such as WSL, Linux or macOS,

run the following in your terminal, then follow the on-screen instructions.

`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`


If you are running Windows,

download and run [rustup‑init.exe](https://win.rustup.rs) then follow the on-screen instructions.

## Notes about Rust installation

### Getting started

If you're just getting started with
Rust and would like a more detailed walk-through, see our
[getting started]( /learn/get-started
) page.

### Windows considerations

On Windows, Rust additionally requires the MSVC build tools
for Visual Studio 2013 or later. See
[
MSVC prerequistes](https://rust-lang.github.io/rustup/installation/windows-msvc.html)

For further information about configuring Rust on Windows see the
[
Windows-specific rustup documentation](https://rust-lang.github.io/rustup/installation/windows.html).

### Toolchain management with `rustup`


Rust is installed and managed by the
[ rustup](https://rust-lang.github.io/rustup/)
tool. Rust has a 6-week

[rapid release process](https://github.com/rust-lang/rfcs/blob/master/text/0507-release-channels.md)and supports a

[great number of platforms](https://forge.rust-lang.org/release/platform-support.html), so there are many builds of Rust available at any time.

`rustup`

manages these builds in a consistent way
on every platform that Rust supports, enabling installation of Rust
from the beta and nightly release channels as well as support for
additional cross-compilation targets.
If you've installed `rustup`

in the past, you can update
your installation by running `rustup update`

.

For more information see the
[
rustup documentation](https://rust-lang.github.io/rustup/).

### Configuring the `PATH`

environment
variable

In the Rust development environment, all tools are installed to the
`~/.cargo/bin`

`%USERPROFILE%\.cargo\bin`

directory, and this is where you will find the Rust toolchain,
including `rustc`

, `cargo`

, and `rustup`

.

Accordingly, it is customary for Rust developers to include this
directory in their
[
PATH environment variable](https://en.wikipedia.org/wiki/PATH_(variable)). During installation

`rustup`

will attempt to configure the `PATH`

.
Because of differences between platforms, command shells, and bugs in
`rustup`

, the modifications to `PATH`

may not
take effect until the console is restarted, or the user is logged out,
or it may not succeed at all.
If, after installation, running `rustc --version`

in the
console fails, this is the most likely reason.

### Uninstall Rust

If at any point you would like to uninstall Rust, you can run
`rustup self uninstall`

.
We'll miss you though!

## Other installation methods

The installation described above, via
`rustup`

, is the preferred way to install Rust for most
developers. However, Rust can be installed via other methods as well.

[Learn more](https://forge.rust-lang.org/infra/other-installation-methods.html)

---

## Source: https://www.rust-lang.org/tools

# Tools

## First-class editor support

Whether you prefer working with code from the
command line, or using rich graphical editors, there’s a Rust
integration available for your editor of choice. Or you can build your
own using [rust-analyzer](https://github.com/rust-analyzer/rust-analyzer).

## Bring calmness to your builds

Cargo is the build tool for Rust. It bundles all common actions into a single command. No boilerplate required.

### Install

With tens of thousands of packages, there’s a
good chance [crates.io](https://crates.io) has the solution
you’re looking for. Stand on the shoulders of giants, and move your team
from repetition to innovation.

### Test

Bring confidence to your code through Rust’s
excellent testing tools. `cargo test`

is
Rust’s unified solution to testing. Write tests next to your code, or in
separate files: it provides a solution for all testing needs.

### Deploy

`cargo build`

creates
lean binaries for every platform. With a single command your code can
target Windows, Linux, macOS, and the web. All part of a modern interface,
with no need for bespoke build files.

## Velocity through automation

Rust’s industry-grade tools make collaboration fearless, allowing teams to focus on the tasks that matter.

### Rustfmt

Rustfmt automatically formats Rust code, making it easier to read, write, and maintain. And most importantly: never debate spacing or brace position ever again.

[Go to repo](https://github.com/rust-lang/rustfmt)

### Clippy

*“It looks like you’re writing an
Iterator.”*

Clippy helps developers of all experience levels
write idiomatic code, and enforce standards.

[Go to repo](https://github.com/rust-lang/rust-clippy)

### Cargo Doc

Cargo’s doc builder makes it so no API
ever goes undocumented. It’s available locally through
`cargo doc`

, and online for public crates
through [docs.rs](https://docs.rs).

[Go to site](https://docs.rs/)

---

## Source: https://www.rust-lang.org/governance

# Governance

## How Rust is built by its community

## RFC process

Each major decision in Rust starts as a Request for Comments (RFC). Everyone is invited to discuss the proposal, to work toward a shared understanding of the tradeoffs. Though sometimes arduous, this community deliberation is Rust’s secret sauce for quality.

[Learn More](https://github.com/rust-lang/rfcs)

## Top-Level Teams

### Leadership council

Charged with the success of the Rust Project as whole, consisting of representatives from top-level teams

[Members & Contacts](/governance/teams/leadership-council)

### Infrastructure team

Managing the infrastructure supporting the Rust project itself, including CI, releases, bots, and metrics

[Members & Contacts](/governance/teams/infra)

### Library team

Managing and maintaining the Rust standard library and official rust-lang crates

[Members & Contacts](/governance/teams/library)

### Moderation team

Helping uphold the code of conduct and community standards and mediating conflicts between team members

[Members & Contacts](/governance/teams/moderation)

## Teams and Members

The Rust project is composed of many teams, and developed by many contributors.

---

## Source: https://www.rust-lang.org/community

# Community

## Where to talk

### Users forum

The Rust Users Forum is a place for Rust users to communicate about anything and everything related to Rust. Ask questions here, coordinate on project ideas, whatever you like!

[Visit Forum](https://users.rust-lang.org)

### Internals forum

The Rust Internals Forum is a place for discussion about the development of Rust itself – including work on the compiler as well as the design of the language and the standard library.

[Visit Forum](https://internals.rust-lang.org)

### Chat platforms

Development of Rust, and general chatter happens on several chat platforms. Check out general channels and more on the Rust Zulip server, or check out the teams page to find where specific teams meet.

## Where to learn

## Read about Rust

The Rust programming language has many qualities, but Rust’s greatest strength is the community of people who come together to make working in Rust a rewarding experience.

Stay up to date with the Rust community!

[This Week in Rust](https://this-week-in-rust.org/)

## Get in contact

We’d like to hear from you! Not sure where or who to ask a question? Want to get involved but aren’t sure how? The community team is eager to connect you with someone who can help!

[email community@rust-lang.org](mailto:community@rust-lang.org)

## Events

### Find a local meetup or conference

There are more than 90 Meetups and several conferences worldwide in over 35 countries. Rustaceans meet periodically in Rust User Groups. They are a great introduction to the community and a great way to learn and socialize with other people with a similar interest. Meetings are usually informal and open to everyone.

### Run your own event

As Rust grows, we’re excited to help folks start their own local events. From hack and learns, to meetups, to conferences, the Rust Events Team is ready to help support you.

Registering your event helps us to keep track of our community efforts and allows us to connect you to speakers or other members in your area.

## Community Standards

We are committed to providing a friendly, safe and welcoming environment
for all, regardless of gender, sexual orientation, disability, ethnicity,
religion, or similar personal characteristic. Our
[code of conduct](/policies/code-of-conduct) sets the
standards for behavior in all official Rust forums.

If you feel you have been or are being harassed or made uncomfortable by a
community member, please contact any of the
[Rust Moderation Team](mailto:rust-mods@rust-lang.org)
immediately. Whether you are a regular contributor or a newcomer, we care
about making the community a safe space for you.

---

## Source: https://www.rust-lang.org/policies/code-of-conduct

# Code of conduct

## Conduct

- We are committed to providing a friendly, safe and welcoming environment for all, regardless of level of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, nationality, or other similar characteristic.
- Please avoid using overtly sexual aliases or other nicknames that might detract from a friendly, safe and welcoming environment for all.
- Please be kind and courteous. There’s no need to be mean or rude.
- Respect that people have differences of opinion and that every design or implementation choice carries a trade-off and numerous costs. There is seldom a right answer.
- Please keep unstructured critique to a minimum. If you have solid ideas you want to experiment with, make a fork and see how it works.
- We will exclude you from interaction if you insult, demean or harass anyone. That is not welcome behavior. We interpret the term “harassment” as including the definition in the
[Citizen Code of Conduct](https://github.com/stumpsyn/policies/blob/master/citizen_code_of_conduct.md); if you have any lack of clarity about what might be included in that concept, please read their definition. In particular, we don’t tolerate behavior that excludes people in socially marginalized groups. - Private harassment is also unacceptable. No matter who you are, if you feel you have been or are being harassed or made uncomfortable by a community member, please contact one of the channel ops or any of the
[Rust moderation team](/governance/teams/moderation)immediately. Whether you’re a regular contributor or a newcomer, we care about making this community a safe place for you and we’ve got your back. - Likewise any spamming, trolling, flaming, baiting or other attention-stealing behavior is not welcome.

## Moderation

These are the policies for upholding our community’s standards of conduct. If you feel that a thread needs moderation, please contact the [Rust moderation team](/governance/teams/moderation).

- Remarks that violate the Rust standards of conduct, including hateful, hurtful, oppressive, or exclusionary remarks, are not allowed. (Cursing is allowed, but never targeting another user, and never in a hateful manner.)
- Remarks that moderators find inappropriate, whether listed in the code of conduct or not, are also not allowed.
- Moderators will first respond to such remarks with a warning.
- If the warning is unheeded, the user will be “kicked,” i.e., kicked out of the communication channel to cool off.
- If the user comes back and continues to make trouble, they will be banned, i.e., indefinitely excluded.
- Moderators may choose at their discretion to un-ban the user if it was a first offense and they offer the offended party a genuine apology.
- If a moderator bans someone and you think it was unjustified, please take it up with that moderator, or with a different moderator,
**in private**. Complaints about bans in-channel are not allowed. - Moderators are held to a higher standard than other community members. If a moderator creates an inappropriate situation, they should expect less leeway than others.

In the Rust community we strive to go the extra step to look out for each other. Don’t just aim to be technically unimpeachable, try to be your best self. In particular, avoid flirting with offensive or sensitive issues, particularly if they’re off-topic; this all too often leads to unnecessary fights, hurt feelings, and damaged trust; worse, it can drive people away from the community entirely.

And if someone takes issue with something you said or did, resist the urge to be defensive. Just stop doing what it was they complained about and apologize. Even if you feel you were misinterpreted or unfairly accused, chances are good there was something you could’ve communicated better — remember that it’s your responsibility to make your fellow Rustaceans comfortable. Everyone wants to get along and we are all here first and foremost because we want to talk about cool technology. You will find that people will be eager to assume good intent and forgive as long as you earn their trust.

The enforcement policies listed above apply to all official Rust venues; including Zulip channels (https://rust-lang.zulipchat.com/); GitHub repositories under rust-lang, rust-lang-nursery, and rust-lang-deprecated; and all forums under rust-lang.org (users.rust-lang.org, internals.rust-lang.org). For other projects adopting the Rust Code of Conduct, please contact the maintainers of those projects for enforcement. If you wish to use this code of conduct for your own project, consider explicitly mentioning your moderation policy or making a copy with your own moderation policy so as to avoid confusion.

*Adapted from the Node.js Policy on Trolling as well as the Contributor Covenant v1.3.0.*

---

## Source: https://www.rust-lang.org/policies/licenses

# Licenses

## License

The Rust Programming Language and all other official projects, including this website, are generally dual-licensed:

Specific licensing info for each project can be found in its GitHub Repository.

Third-party logos may be subject to third-party copyrights and trademarks, and are not available under the same license as the rest of the Rust website.

If you have a specific question or concern about how the Rust project or any of its associated projects are licensed, please contact the Rust Leadership Council.

[Email The Leadership Council](mailto:council@rust-lang.org)

## Attribution

Icons made by [Freepik](http://www.freepik.com) from [www.flaticon.com](https://www.flaticon.com/), licensed by [CC-3.0-BY](http://creativecommons.org/licenses/by/3.0/)

---

## Source: https://www.rust-lang.org/policies/security

# Security policy

## Reporting

Safety is one of the core principles of Rust, and to that end, we would like to ensure that Rust has a secure implementation. Thank you for taking the time to responsibly disclose any issues you find.

All security bugs in the Rust distribution should be reported by email to [security@rust-lang.org](mailto:security@rust-lang.org). This list is delivered to a small security team. Your email will be acknowledged within 24 hours, and you’ll receive a more detailed response to your email within 48 hours indicating the next steps in handling your report.

This email address receives a large amount of spam, so be sure to use a descriptive subject line to avoid having your report be missed. After the initial reply to your report, the security team will endeavor to keep you informed of the progress being made towards a fix and full announcement. As recommended by [RFPolicy](https://en.wikipedia.org/wiki/RFPolicy), these updates will be sent at least every five days. In reality, this is more likely to be every 24-48 hours.

If you have not received a reply to your email within 48 hours, or have not heard from the security team for the past five days, there are a few steps you can take (in order):

- Contact both the security coordinators directly:
- Post on the
[internals forums](https://internals.rust-lang.org/)

Please note that the discussion forums are public areas. When escalating in these venues, please do not discuss your issue. Simply say that you’re trying to get a hold of someone from the security team.

## Scope

The Rust Security Response WG handles vulnerability reports for everything maintained and published by the Rust Project:

- The following GitHub organizations, and all repositories and CI pipelines hosted in them:
-
The following domain names, all their subdomains, and all applications hosted within:
[rust-lang.org](http://rust-lang.org)(see exceptions below)[rustup.rs](http://rustup.rs)[crates.io](http://crates.io)(see exceptions below)[docs.rs](http://docs.rs)[rfcbot.rs](http://rfcbot.rs)

- All crates owned by
[@rust-lang-owner](https://crates.io/users/rust-lang-owner)on[crates.io](http://crates.io). - All extensions in the Visual Studio Marketplace published by
.`rust-lang`

- All extensions in the Open VSX registry published by
.`rust-lang`


The following things are **outside our scope**:

- The
[internals.rust-lang.org](http://internals.rust-lang.org)and[users.rust-lang.org](http://users.rust-lang.org)domains. Please follow[Discourse's Security Policy](https://github.com/discourse/discourse/blob/main/docs/SECURITY.md)for it. - Third-party packages published on
[crates.io](http://crates.io). Please follow[crates.io's Security Policy](https://crates.io/security)for them.

When reporting vulnerabilities, keep in mind that:

- Unless otherwise noted, all components of the Rust toolchain (rustc, Cargo, rust-analyzer, or any other tool shipped through rustup) assume that the user's source code and dependencies are fully trusted, reviewed and contain no malicious code. We do not consider attacks caused by compiling or analyzing malicious projects or dependencies a security vulnerability.
- Soundness issues in the Rust compiler or language are not automatically classified as a security vulnerability, but will be analyzed on a case-by-case basis if reported.
- The
`regex`

crate[provides guarantees about untrusted patterns](https://docs.rs/regex/latest/regex/#untrusted-input). We consider denial of service with untrusted patterns a security vulnerability only if the time spent inside of the`regex`

crate is not linear, and none of the[limit methods in](https://docs.rs/regex/latest/regex/struct.RegexBuilder.html)are able to prevent the attack.`RegexBuilder`


If you have doubts on whether something falls within our scope, [please reach out](mailto:security@rust-lang.org) and we will provide guidance.

## Disclosure policy

The Rust project has a 5 step disclosure process.

- The security report is received and is assigned a primary handler. This person will coordinate the fix and release process.
- The problem is confirmed, the affected versions are identified, and relevant domain experts from relevant Rust teams are involved.
- Code is audited to find any potential similar problems.
- Fixes are prepared for all supported release branches, and a CVE number is reserved. These fixes are not committed to the public repository but rather held in private repositories pending the announcement. These fixes are reviewed privately using the same review process of public changes.
- On the embargo date, a copy of the announcement is sent to the
[Rust security mailing list](https://groups.google.com/forum/#!forum/rustlang-security-announcements)and posted on the Rust blog. The changes are pushed to the public repository and the release process is started. Within an hour, full details are published in the CVE database

This process can take some time, especially when coordination is required with maintainers of other projects. Every effort will be made to handle the bug in as timely a manner as possible, however it’s important that we follow the release process above to ensure that the disclosure is handled in a consistent manner.

## Receiving security updates

The best way to receive all the security announcements is to subscribe to the [Rust security announcements mailing list](https://groups.google.com/group/rustlang-security-announcements/subscribe) (alternatively by sending an email to [rustlang-security-announcements+subscribe@googlegroups.com](mailto:rustlang-security-announcements+subscribe@googlegroups.com)). The mailing list is very low traffic, and it receives the public notifications the moment the embargo is lifted. Announcements on the mailing list are signed with the [Rust's security key](/static/keys/rust-security-team-key.gpg.ascii).

The Rust project only provides support and security updates for the most recent stable release and the latest releases in our [beta and nightly channels](https://doc.rust-lang.org/book/appendix-07-nightly-rust.html). As Rust releases must be built in the public, we will begin the release process as soon as the embargo lifts, and a release blog post will be published once updated binaries are available for download.

When a vulnerability affects software distributions, we will announce vulnerabilities 72 hours before the embargo is lifted to [distros@openwall](https://oss-security.openwall.org/wiki/mailing-lists/distros), so that distributions can update their packages when the embargo lifts.

---

## Source: https://www.rust-lang.org/policies

# Policies

This page links to the comprehensive set of Rust’s policies.

Didn’t find what you were looking for? Have a question? Please reach out!

This page links to the comprehensive set of Rust’s policies.

Didn’t find what you were looking for? Have a question? Please reach out!