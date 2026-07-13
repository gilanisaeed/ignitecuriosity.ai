"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function DownloadPDFButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)
    
    try {
      // Dynamically import the libraries
      const html2canvas = (await import("html2canvas")).default
      const { jsPDF } = await import("jspdf")

      // Create a hidden iframe to load the HTML
      const iframe = document.createElement("iframe")
      iframe.style.position = "absolute"
      iframe.style.left = "-9999px"
      iframe.style.width = "1200px"
      iframe.style.height = "850px"
      document.body.appendChild(iframe)

      // Write the HTML content to the iframe
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IgniteEd | Administrator Executive Summary</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --purple: #56457f;
            --orange: #f27a37;
            --teal: #2f8ca8;
            --warm-white: #FEFDFB;
            --midnight: #192028;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Roboto', Arial, sans-serif;
            background-color: var(--warm-white);
            color: var(--midnight);
            font-size: 11px;
            line-height: 1.4;
            width: 1200px;
        }
        h1, h2, h3, h4 {
            font-family: 'Montserrat', Arial, sans-serif;
            font-weight: 600;
            color: var(--purple);
        }
        
        .hero {
            background: linear-gradient(to left, #56457f 0%, #2f8ca8 100%);
            color: white;
            padding: 28px 36px;
        }
        .hero-badge {
            display: inline-block;
            background: white;
            color: #56457f;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 12px;
        }
        .hero h1 {
            font-size: 26px;
            margin-bottom: 10px;
            line-height: 1.3;
        }
        .hero h1 .ignite { color: #56457f; }
        .hero h1 .ed { color: #f27a37; }
        .hero h1 .title { color: white; }
        .hero .tagline {
            font-size: 16px;
            opacity: 0.95;
            margin-bottom: 10px;
        }
        .hero .description {
            font-size: 12px;
            opacity: 0.9;
            max-width: 900px;
            line-height: 1.5;
        }
        
        .main {
            padding: 24px 36px;
        }
        
        .value-props {
            display: flex;
            gap: 24px;
            margin-bottom: 28px;
        }
        .value-prop {
            flex: 1;
            text-align: center;
            padding: 12px;
        }
        .value-prop-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            font-size: 18px;
        }
        .value-prop-icon.teal { background: rgba(47, 140, 168, 0.15); color: #2f8ca8; }
        .value-prop-icon.orange { background: rgba(242, 122, 55, 0.15); color: #f27a37; }
        .value-prop-icon.purple { background: rgba(86, 69, 127, 0.15); color: #56457f; }
        .value-prop h3 {
            font-size: 14px;
            margin-bottom: 6px;
        }
        .value-prop p {
            font-size: 10px;
            color: #555;
            line-height: 1.4;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 20px;
        }
        .section-title h2 {
            font-size: 18px;
            margin-bottom: 6px;
        }
        .section-title p {
            color: #777;
            font-size: 11px;
        }
        
        .phases {
            display: flex;
            gap: 12px;
            margin-bottom: 28px;
        }
        .phase {
            flex: 1;
            background: white;
            border-radius: 10px;
            padding: 14px;
            border-top: 4px solid #2f8ca8;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .phase-label {
            color: #2f8ca8;
            font-size: 8px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 6px;
        }
        .phase h4 {
            font-size: 12px;
            margin-bottom: 6px;
        }
        .phase p {
            font-size: 9px;
            color: #555;
            margin-bottom: 8px;
            line-height: 1.4;
        }
        .phase ul {
            list-style: none;
            font-size: 9px;
            color: #777;
        }
        .phase ul li {
            margin-bottom: 3px;
            padding-left: 10px;
            position: relative;
        }
        .phase ul li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #2f8ca8;
        }
        
        .tiers {
            display: flex;
            border: 1px solid #ddd;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 28px;
        }
        .tier {
            flex: 1;
            padding: 16px;
            background: white;
        }
        .tier.middle {
            background: #f8f8f8;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            position: relative;
        }
        .popular-badge {
            position: absolute;
            top: 0;
            right: 0;
            background: #f27a37;
            color: white;
            font-size: 8px;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 0 0 0 8px;
        }
        .tier h3 {
            font-size: 14px;
            margin-bottom: 4px;
        }
        .tier h3.teal { color: #2f8ca8; }
        .tier h3.orange { color: #f27a37; }
        .tier h3.purple { color: #56457f; }
        .tier .price {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 12px;
            color: #192028;
        }
        .tier .price span {
            font-size: 10px;
            font-weight: 400;
            color: #999;
        }
        .tier ul {
            list-style: none;
            font-size: 10px;
        }
        .tier ul li {
            display: flex;
            align-items: flex-start;
            gap: 6px;
            margin-bottom: 8px;
        }
        .tier ul li .check {
            font-weight: 700;
            font-size: 12px;
        }
        .tier:first-child ul li .check { color: #2f8ca8; }
        .tier.middle ul li .check { color: #f27a37; }
        .tier:last-child ul li .check { color: #56457f; }
        .tier .plus-label {
            font-size: 8px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        .tier .plus-label.orange { color: #f27a37; }
        .tier .plus-label.purple { color: #56457f; }
        
        .leadership {
            text-align: center;
            border-top: 1px solid #eee;
            padding-top: 20px;
            margin-top: 12px;
        }
        .leadership-label {
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #999;
            font-weight: 700;
            margin-bottom: 16px;
        }
        .leaders {
            display: flex;
            justify-content: center;
            gap: 60px;
        }
        .leader {
            text-align: center;
        }
        .leader .name {
            font-size: 14px;
            font-weight: 700;
            color: #56457f;
            margin-bottom: 3px;
            font-family: 'Montserrat', Arial, sans-serif;
        }
        .leader .role {
            font-size: 10px;
            font-weight: 700;
            color: #2f8ca8;
            margin-bottom: 3px;
        }
        .leader .org {
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #333;
        }
        .leadership-note {
            margin-top: 16px;
            font-size: 9px;
            color: #999;
            font-style: italic;
        }
        
        .footer {
            background: #192028;
            color: white;
            padding: 20px 36px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .footer h2 {
            color: white;
            font-size: 16px;
            margin-bottom: 6px;
        }
        .footer p {
            color: #888;
            font-size: 10px;
            max-width: 320px;
        }
        .footer-cta {
            text-align: right;
        }
        .footer-btn {
            display: inline-block;
            background: #f27a37;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 700;
            text-decoration: none;
            font-size: 11px;
            margin-bottom: 8px;
        }
        .footer-copy {
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="hero">
        <div class="hero-badge">Strategic capacity-building partnership</div>
        <h1>
            <span class="ignite">Ignite</span><span class="ed">Ed</span><span class="title">: Responsible AI & Adaptive Learning for Educators</span>
        </h1>
        <p class="tagline">Where <strong>human curiosity</strong> meets <strong>responsible AI</strong>.</p>
        <p class="description">We prepare your educators to lead the AI disruption as Instructional Architects, mastering the design of resilient, human-centered learning environments that evolve alongside every new technological frontier.</p>
    </div>

    <div class="main">
        <div class="value-props">
            <div class="value-prop">
                <div class="value-prop-icon teal">&#10003;</div>
                <h3>Platform Agnostic</h3>
                <p>Principles that work across Google, Microsoft, Apple, or Canvas. We build long-term capability, not dependency on a single tool.</p>
            </div>
            <div class="value-prop">
                <div class="value-prop-icon orange">&#9881;</div>
                <h3>Instructional Architects</h3>
                <p>We move beyond "how to use a chatbot." We train educators to design high-quality, personalized learning systems that outlast software trends.</p>
            </div>
            <div class="value-prop">
                <div class="value-prop-icon purple">&#9889;</div>
                <h3>Pedagogy Led</h3>
                <p>Grounded in UDL and differentiation science. AI is the engine, but human expertise is always the driver of the classroom.</p>
            </div>
        </div>

        <div class="section-title">
            <h2>The 4-Phase Transformation Cycle</h2>
            <p>A deliberate 12-month journey toward sustainable capacity building.</p>
        </div>
        
        <div class="phases">
            <div class="phase">
                <div class="phase-label">Phase 01 | Months 1-3</div>
                <h4>Ignite & Align</h4>
                <p>Establishing baseline literacy, safe governance, and the "Human-in-the-Loop" commitment.</p>
                <ul>
                    <li>Policy Alignment</li>
                    <li>AI Ethics Audit</li>
                </ul>
            </div>
            <div class="phase">
                <div class="phase-label">Phase 02 | Months 4-6</div>
                <h4>Build & Analyze</h4>
                <p>Creating multi-modal UDL resources and leveraging privacy-safe learning analytics.</p>
                <ul>
                    <li>Prompt Engineering</li>
                    <li>UDL Content Design</li>
                </ul>
            </div>
            <div class="phase">
                <div class="phase-label">Phase 03 | Months 7-9</div>
                <h4>Apply & Pilot</h4>
                <p>Running classroom PDSA micro-pilots to measure and refine instructional impact.</p>
                <ul>
                    <li>Classroom Piloting</li>
                    <li>Impact Measurement</li>
                </ul>
            </div>
            <div class="phase">
                <div class="phase-label">Phase 04 | Months 10-12</div>
                <h4>Scale & Celebrate</h4>
                <p>Consolidating evidence in portfolios and certifying internal peer-mentors.</p>
                <ul>
                    <li>Peer Certification</li>
                    <li>Showcase Events</li>
                </ul>
            </div>
        </div>

        <div class="section-title">
            <h2>Partnership Tiers</h2>
            <p style="font-style: italic;">Designed for 10-teacher cohorts to maximize institutional impact.</p>
        </div>

        <div class="tiers">
            <div class="tier">
                <h3 class="teal">Essential</h3>
                <div class="price">$30,000 <span>/ year</span></div>
                <ul>
                    <li><span class="check">&#10003;</span> Full 8-Module Curriculum</li>
                    <li><span class="check">&#10003;</span> Administrator "Look-Fors" Training</li>
                    <li><span class="check">&#10003;</span> 3 Coaching Cycles</li>
                    <li><span class="check">&#10003;</span> Resource Hub Access</li>
                </ul>
            </div>
            <div class="tier middle">
                <div class="popular-badge">MOST POPULAR</div>
                <h3 class="orange">Premium</h3>
                <div class="price">$48,000 <span>/ year</span></div>
                <div class="plus-label orange">Everything in Essential, plus:</div>
                <ul>
                    <li><span class="check">&#10003;</span> Monthly "Office Hours"</li>
                    <li><span class="check">&#10003;</span> Family & Parent Guide Toolkit</li>
                    <li><span class="check">&#10003;</span> 8 In-Person/Hybrid Coaching Cycles</li>
                </ul>
            </div>
            <div class="tier">
                <h3 class="purple">Platinum</h3>
                <div class="price">$70,000 <span>/ year</span></div>
                <div class="plus-label purple">Everything in Premium, plus:</div>
                <ul>
                    <li><span class="check">&#10003;</span> Custom IT "Technical Track"</li>
                    <li><span class="check">&#10003;</span> Board-Level Strategic Advisory</li>
                    <li><span class="check">&#10003;</span> "Train the Trainer" Certification</li>
                </ul>
            </div>
        </div>

        <div class="leadership">
            <div class="leadership-label">Design & Development Leadership</div>
            <div class="leaders">
                <div class="leader">
                    <div class="name">Azade Sanjari</div>
                    <div class="role">AI Architect</div>
                    <div class="org">Stanford Graduate School of Business</div>
                </div>
                <div class="leader">
                    <div class="name">Dr. Azin Sanjari</div>
                    <div class="role">Professor of Mathematics Education</div>
                    <div class="org">University of Central Arkansas</div>
                </div>
            </div>
            <p class="leadership-note">IgniteEd is a proprietary framework designed and developed by the Ignite Curiosity Lab.</p>
        </div>
    </div>

    <div class="footer">
        <div>
            <h2>Ready to transform?</h2>
            <p>Schedule a consultation to audit your district's AI readiness and build a custom roadmap.</p>
        </div>
        <div class="footer-cta">
            <div class="footer-btn">Book a Strategy Session</div>
            <div class="footer-copy">&copy; 2026 Ignite Curiosity Lab</div>
        </div>
    </div>
</body>
</html>`

      iframe.contentDocument?.open()
      iframe.contentDocument?.write(htmlContent)
      iframe.contentDocument?.close()

      // Wait for fonts and images to load
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const body = iframe.contentDocument?.body
      if (!body) {
        throw new Error("Could not access iframe content")
      }

      // Capture the content as canvas
      const canvas = await html2canvas(body, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#FEFDFB",
        width: 1200,
        windowWidth: 1200,
      })

      // Create PDF from canvas - single page that fits all content
      const imgData = canvas.toDataURL("image/png")
      
      // Calculate dimensions to fit content on a single page
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const aspectRatio = imgWidth / imgHeight
      
      // Use landscape A4 to fit more content, or create custom size based on aspect ratio
      const pdfWidth = 297 // A4 landscape width in mm
      const pdfHeight = pdfWidth / aspectRatio
      
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
      })

      // Add image to fit entire page
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)

      // Download the PDF
      pdf.save("IgniteEd-Program-Overview.pdf")

      // Cleanup
      document.body.removeChild(iframe)
    } catch (error) {
      console.error("Error generating PDF:", error)
      // Fallback: open HTML in new tab for manual print
      window.open("/igniteed/IgniteEd-Program-Overview.html", "_blank")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      size="lg"
      variant="outline"
      className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 h-auto"
      onClick={generatePDF}
      disabled={isGenerating}
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Generating PDF...
        </>
      ) : (
        "Download Program Overview"
      )}
    </Button>
  )
}
