export function ExampleProject() {
  return (
    <section id="format" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Example Project Format
          </h2>
          <p className="mb-8 text-center text-muted-foreground">
            Sponsor projects to prototype solutions, find talent, connect with the community and more!
          </p>

          <div className="bg-background border rounded-lg p-8 space-y-8">
            <div className="gap-4 flex flex-col">
              <div className="gap-2">
                <h3 className="text-2xl font-semibold text-primary">Context</h3>
                <p className="italic text-foreground"> 
                    Provide context to the hackers about your company, your situation and what you are looking for.
                </p>
              </div>

              <p className="text-foreground">
                Example 1: We are a startup in the healthcare industry and 
                we are looking for a team of hackers to help us prototype a solution to a problem. 
                We do not expect you to finish the whole project. We are looking to assess your skills and 
                how you work as a team. We are looking to hire a team of developers to work on our project after the hackathon.
              </p>

              <p className="text-foreground">
                Example 2: We are a non-profit organization based in Louisville, KY that works with local schools. 
                We are looking for a team to help us prototype a number of solution. We would love to partner with you 
                after the hackathon to continue working on the project. Note: Continuation of the project is not guaranteed.
              </p>
            </div>

            <div className="gap-4 flex flex-col">
              <div className="gap-2">
                <h3 className="text-2xl font-semibold text-primary">Problem Statement</h3>
                <p className="italic text-foreground"> 
                    Provide a problem statement on what the project is trying to solve. It can be narrow or broad.
                </p>
              </div>

              <p className="text-foreground">
                Example 1 (narrow): Currently patients in hospitals have their activity tracked by staff on paper and pencil
                on a clipboard located at the front of the bed. This is a challenge for staff to keep track of the patients history in hospital. 
                We would like you to create a &quot;patients&quot; CRM that allows staff to track the patients history in hospital digitally.
              </p>

              <p className="text-foreground">
                Example 2 (broad): Nutrition is important for students to grow and learn. 
                Create a technology solution that helps improve student nutrition! This can be a mobile app for parents to track their child&apos;s nutrition, 
                a website for students to find healthy options on campus, or a tool for school administrators to track the nutrition of their students.
              </p>
            </div>

            <div className="space-y-4">
              <div className="gap-2">
                <h3 className="text-2xl font-semibold text-primary">Requirements</h3>
                <p className="italic text-foreground"> 
                    Define the requirements for the project. This should be a list of features that the project should have 
                    and things that they cannot use.
                </p>
              </div>

            <div>
              <p className="text-foreground">
                Example 1: Patient CRM
              </p>
              <ul className="list-disc list-inside text-foreground gap-1">
                    <li>Must use AWS, we are an AWS company</li>
                    <li>Must use React</li>
                    <li>Must use Java / SpringBoot</li>
                    <li>Must be HIPPA compliant</li>
                </ul>
            </div>
            <div>
              <p className="text-foreground">
                Example 2: Student Nutrition
              </p>
              <ul className="list-disc list-inside text-foreground gap-1">
                    <li>Must not encourage cellphones use by students while in school (do not distract teachers)</li>
                    <li>Must track allergies</li>
                    <li>Must be accessible for non-English speakers</li>
                    <li>Administrators must be able to track the nutrition of students</li>
                </ul>
                </div>
            </div>

            <div className="gap-4 flex flex-col">
              <div className="gap-2">
                <h3 className="text-2xl font-semibold text-primary">Prize</h3>
                <p className="italic text-foreground"> 
                    Define the prize for the project. This should be a list of prizes that the project will be awarded.
                </p>
              </div>

              <div>
              <p className="text-foreground">
                Example 1: Patient CRM
            </p>
            <ul className="list-disc list-inside text-foreground gap-1">
                <li>Automatic first-round interview with our team</li>
                <li>$250 cash prize</li>
                <li>Mentorship session with industry experts</li>
                <li>Featured on our social media channels</li>
            </ul>
            </div>

            <div>
              <p className="text-foreground">
                Example 2: Student Nutrition

              </p>
              <ul className="list-disc list-inside text-foreground gap-1">
                    <li>Winner recognized at our annual dinner</li>
                    <li>Option to continue working on the project after the hackathon</li>
                    <li>Solution published on our website</li>
                </ul>
                </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {['Health', 'Education', 'Social Impact'].map((track) => (
                <span 
                  key={track}
                  className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary border border-primary/30"
                >
                  {track}
                </span>
              ))}
            </div>

            <div className="pt-4 flex justify-center">
              <a
                href="https://kycombinator.typeform.com/hackkyproject"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Submit Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 