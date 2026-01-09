import { motion } from "framer-motion";
import { Mic, FileText } from "lucide-react";

export const TranscriptVisual = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-5xl mx-auto">
      {/* Raw Transcript */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl p-6 w-full lg:w-80"
      >
        <div className="flex items-center gap-2 mb-4">
          <Mic className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Voice Input</span>
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed">
          "I slept about 7 hours and 20 minutes last night. Today I learned that you can use dataview queries to filter tasks by due date. Also, my morning run really helped me start the day off well, so maybe I should do more of that."
        </p>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex items-center justify-center"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple">
          <svg className="w-5 h-5 text-primary-foreground rotate-90 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </motion.div>

      {/* Markdown Output */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass rounded-xl p-6 w-full lg:w-96 text-left"
      >
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-4 h-4 text-secondary" />
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Daily Note Output</span>
        </div>
        <div className="font-mono text-sm space-y-1">
          <div className="text-muted-foreground">---</div>
          <div><span className="text-primary">sleep:</span> <span className="text-foreground/80">7.33</span></div>
          <div className="text-muted-foreground">---</div>
          <div className="pt-2">
            <span className="text-secondary">## Things I Learned Today</span>
          </div>
          <div className="text-foreground/80 pl-0">
            - Dataview queries can filter tasks by due date
            <br />
            - Have more morning runs to increase productivity
          </div>
        </div>
      </motion.div>
    </div>
  );
};
